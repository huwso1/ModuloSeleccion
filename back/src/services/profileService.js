import oracledb from 'oracledb';

async function getAllProfiles() {
  let connection;
  try {
    connection = await oracledb.getConnection();
    const result = await connection.execute(`
      SELECT P.idPerfil AS id, 
             P.desperfil AS perfil, 
             D.descDisciplina AS disciplina
      FROM Perfil P
      LEFT JOIN Disciplina D ON P.idDisciplina = D.idDisciplina
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
  } catch (error) {
    console.error('Error getting profiles:', error);
    throw error;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

export {
  getAllProfiles
};