import oracledb from 'oracledb';

async function createRequirement(salariomax, salariomin, descfuncion, descCarreras, numVacantes, codEmpleado, analistaG) {
  let connection;
  try {
    connection = await oracledb.getConnection();
    
    const query = `
      INSERT INTO REQUERIMIENTO(consecReque, fechaReque, salarioMax, salarioMin, desFuncion, desCarreras, nVacantes, codEmpleado1, codEmpleado2) 
      VALUES (REQUERIMIENTO_SEQ.nextval, CURRENT_DATE, :salariomax, :salariomin, :descfuncion, :descCarreras, :numVacantes, :codEmpleado, :analistaG)
      RETURNING consecReque INTO :newId
    `;
    
    const binds = {
      salariomax: salariomax,
      salariomin: salariomin,
      descfuncion: descfuncion,
      descCarreras: descCarreras,
      numVacantes: numVacantes,
      codEmpleado: codEmpleado,
      analistaG: analistaG,
      newId: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT }
    };

    const options = {
      autoCommit: true
    };

    const result = await connection.execute(query, binds, options);

    // Obtener el ID del requerimiento insertado
    const newId = result.outBinds.newId[0];

    console.log('Requirement created with ID:', newId);

    return newId;
  } catch (error) {
    console.error('Error creating requirement:', error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error('Error closing connection:', error);
      }
    }
  }
}


async function getRequirementsByGeneralAnalystId(analystId) {
  let connection;
  try {
    connection = await oracledb.getConnection();

    const query = `
    SELECT R.*, Res.nomEmpleado||' '||Res.apellEmpleado responsable,
        CASE 
          WHEN (SELECT COUNT(PR.consproceso)
                FROM ProcesoRequerimiento PR
                WHERE R.consecReque = PR.consecReque) = 0
          THEN 1
          ELSE (SELECT COUNT(PR.consproceso)
                FROM ProcesoRequerimiento PR
                WHERE R.consecReque = PR.consecReque)
        END AS fase
    FROM Requerimiento R
    JOIN Empleado E ON R.codEmpleado2 = E.codEmpleado
    JOIN Empleado Res ON Res.codEmpleado = E.codEmpleado
    WHERE E.codEmpleado = :analystId
    `;

    const result = await connection.execute(query, { analystId }, { outFormat: oracledb.OUT_FORMAT_OBJECT });

    return result.rows; // Devolver las filas obtenidas
  } catch (error) {
    console.error('Error getting requirements by general analyst ID:', error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error('Error closing connection:', error);
      }
    }
  }
}


export {
  createRequirement,
  getRequirementsByGeneralAnalystId,
};