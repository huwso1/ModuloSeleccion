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

    const candidates = result.rows.map(row => {
      let candidate = {};
      result.metaData.forEach((meta, idx) => {
        candidate[meta.name.toLowerCase()] = row[idx];
      });
      return candidate;
    });

    return candidates;
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

async function getCandidatesFifthPhase(idRequerimiento) {
  let connection;
  try {
    connection = await oracledb.getConnection();

    const getCandidatesQuery = `
      SELECT C.*
      FROM candidato C
      WHERE C.usuario IN (
        SELECT usuario
        FROM ProcesoCandidato PC
        WHERE consProceso = 4 AND consecReque = :idRequerimiento
      )
    `;
    const result = await connection.execute(getCandidatesQuery, { idRequerimiento });

    const candidates = result.rows.map(row => {
      let candidate = {};
      result.metaData.forEach((meta, idx) => {
        candidate[meta.name.toLowerCase()] = row[idx];
      });
      return candidate;
    });
    
    return candidates;
  } catch (error) {
    console.error('Error obteniendo candidatos para la quinta fase:', error);
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
  getAllCandidatesByDiscipline,
  getCandidatesFifthPhase,
};
