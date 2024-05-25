import oracledb from 'oracledb';

async function getTestsForRequirement(idRequerimiento) {
  let connection;
  try {
    connection = await oracledb.getConnection();

    const query = `
      SELECT PB.idPrueba, TP.descTipoPrueba AS TipoPrueba, D.descDisciplina AS disciplina,
             PB.descPrueba, PB.pruebaActiva AS activa 
      FROM Prueba PB
      JOIN TipoPrueba TP ON PB.idTipoPrueba = TP.idTipoPrueba
      JOIN Disciplina D ON D.idDisciplina = PB.idDisciplina
      WHERE PB.idDisciplina = (
        SELECT DISTINCT D.idDisciplina
        FROM Disciplina D
        JOIN Perfil P ON D.idDisciplina = P.idDisciplina
        JOIN PerfilFase PF ON P.idPerfil = PF.idPerfil
        JOIN ProcesoRequerimiento PR ON PF.idPerfil = PR.idPerfil AND PF.idFase = PR.idFase
        WHERE PR.consecReque = :idRequerimiento
      )
    `;

    const result = await connection.execute(query, { idRequerimiento });

    // Transformar el resultado para retornar un array de objetos con los nombres de las columnas como claves
    const rows = result.rows.map(row => {
      const obj = {};
      for (let i = 0; i < result.metaData.length; i++) {
        obj[result.metaData[i].name.toLowerCase()] = row[i];
      }
      return obj;
    });

    return rows;
  } catch (error) {
    console.error('Error fetching tests for requirement:', error);
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

export { getTestsForRequirement };