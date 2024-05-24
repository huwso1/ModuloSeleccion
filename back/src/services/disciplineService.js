import oracledb from 'oracledb';

async function getAllDisciplines() {
  let connection;
  try {
    connection = await oracledb.getConnection();

    const query = 'SELECT idDisciplina id, descDisciplina nombre FROM Disciplina';
    const result = await connection.execute(query);

    const jsonData = result.rows.map(row => {
      return result.metaData.reduce((obj, meta, index) => {
        obj[meta.name.toLowerCase()] = row[index];
        return obj;
      }, {});
    });

    return jsonData;
  } catch (error) {
    console.error('Error getting disciplines:', error);
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
  getAllDisciplines
};