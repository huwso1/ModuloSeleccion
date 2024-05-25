import oracledb from 'oracledb';

async function getAllCandidatesByDiscipline(idRequerimiento) {
  let connection;
  try {
    connection = await oracledb.getConnection();

    const query = `
      SELECT C.*
      FROM candidato C
      JOIN Disciplina D ON C.idDisciplina = D.idDisciplina
      WHERE C.idDisciplina = (
        SELECT DISTINCT D.idDisciplina
        FROM Disciplina D
        JOIN Perfil P ON D.idDisciplina = P.idDisciplina
        JOIN PerfilFase PF ON P.idPerfil = PF.idPerfil
        JOIN ProcesoRequerimiento PR ON PF.idPerfil = PR.idPerfil AND PF.idFase = PR.idFase
        JOIN Requerimiento R ON PR.consecReque = R.consecReque
        WHERE R.consecReque = :idRequerimiento
      )
    `;

    const result = await connection.execute(query, { idRequerimiento });

    return result.rows;
  } catch (error) {
    console.error('Error getting candidates by discipline:', error);
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
  getAllCandidatesByDiscipline
};
