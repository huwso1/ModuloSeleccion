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

export {
  getAllGeneralAnalyst
};