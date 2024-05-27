import oracledb from 'oracledb';

async function getAllGeneralAnalyst() {
  let connection;
  try {
    connection = await oracledb.getConnection();
    const result = await connection.execute(`
      SELECT E.codEmpleado AS id, 
             E.nomEmpleado AS nombre, 
             E.apellEmpleado AS apellido, 
             E.fechaNac AS fechaNacimiento, 
             E.fechaIngre AS fechaIngreso, 
             E.correo AS correo
      FROM Empleado E
      JOIN Cargo C ON E.codEmpleado = C.codEmpleado
      JOIN TipoCargo T ON C.idTipoCargo = T.idTipoCargo
      WHERE LOWER(T.descTipoCargo) LIKE '%general%'
    `, [], { resultSet: true });

    const resultSet = result.resultSet;
    let jsonData = [];
    let row;
    while ((row = await resultSet.getRow())) {
      const obj = {};
      result.metaData.forEach((meta, index) => {
        obj[meta.name.toLowerCase()] = row[index];
      });
      jsonData.push(obj);
    }

    await resultSet.close();

    return jsonData;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

async function createEmployee(employeeData) {
  let connection;
  try {
    connection = await oracledb.getConnection();

    // Obtener el siguiente valor de la secuencia EMPLEADO_SEQ y convertirlo a cadena
    const sequenceQuery = `SELECT TO_CHAR(EMPLEADO_SEQ.NEXTVAL) AS new_emp_id FROM dual`;
    const result = await connection.execute(sequenceQuery);

    if (result.rows.length > 0) {
      const newEmpId = result.rows[0][0];

      // Insertar el nuevo empleado en la tabla Empleado
      const insertEmployeeQuery = `
        INSERT INTO Empleado(codEmpleado, nomEmpleado, apellEmpleado, fechaNac, FechaIngre, correo)
        VALUES (:codEmpleado, :nomEmpleado, :apellEmpleado, TO_DATE(:fechadenacimiento, 'YYYY-MM-DD'), SYSDATE, :correo)
      `;
      const employeeBinds = {
        codEmpleado: newEmpId,
        nomEmpleado: employeeData.nomEmpleado,
        apellEmpleado: employeeData.apeEmpleado,
        fechadenacimiento: employeeData.fechadenacimiento,
        correo: employeeData.correo
      };
      await connection.execute(insertEmployeeQuery, employeeBinds);

      // Insertar el registro en la tabla CARGO
      const insertCargoQuery = `
        INSERT INTO CARGO(ConseCargo, codEmpleado, idTipoCargo, FechainicioCargo, descCargo)
        VALUES (CARGO_SEQ.NEXTVAL, :codEmpleado, :idTipoCargo, SYSDATE, ' ')
      `;
      const cargoBinds = {
        codEmpleado: newEmpId,
        idTipoCargo: employeeData.idtipocargo
      };
      await connection.execute(insertCargoQuery, cargoBinds);

      // Hacer commit a las transacciones
      await connection.execute('COMMIT');

      // Retornar el ID del nuevo empleado
      return { id: newEmpId };
    } else {
      throw new Error('No se pudo obtener el siguiente valor de la secuencia');
    }
  } catch (error) {
    console.error('Error creando empleado:', error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error('Error cerrando la conexión:', error);
      }
    }
  }
}

async function employeeLogin({ usuario, contraseña }) {
  let connection;
  try {
    connection = await oracledb.getConnection();

    // Consultar la información del empleado
    const query = `
      SELECT E.codEmpleado AS id, TC.idTipoCargo AS idTipoCargo, TC.descTipoCargo AS tipocargo
      FROM Empleado E
      JOIN Cargo C ON E.codEmpleado = C.codEmpleado
      JOIN TipoCargo TC ON C.idTipoCargo = TC.idTipoCargo
      WHERE E.correo = :correo
    `;

    const result = await connection.execute(query, { correo: usuario });

    if (result.rows.length === 0) {
      return null;
    }

    // Obtener los metadatos y las filas del resultado
    const rows = result.rows;
    const meta = result.metaData;
    
    // Convertir los resultados a un array de objetos con los nombres de los atributos
    const employees = rows.map(row => {
      let employee = {};
      meta.forEach((col, index) => {
        employee[col.name.toLowerCase()] = row[index];
      });
      return employee;
    });

    return employees[0];  // Dado que estamos esperando un solo resultado
  } catch (error) {
    console.error('Error en el inicio de sesión del empleado:', error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error('Error cerrando la conexión:', error);
      }
    }
  }
}

export {
  getAllGeneralAnalyst,
  createEmployee,
  employeeLogin,
};