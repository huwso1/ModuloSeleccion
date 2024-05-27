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

async function getCandidatesPassedTest(requerimientoId) {
  let connection;
  try {
    connection = await oracledb.getConnection();

    const query = `
      SELECT c.*
      FROM Candidato c
      JOIN ProcesoCandidato pc ON c.usuario = pc.usuario
      JOIN PruebaCandidato prc ON pc.usuario = prc.usuario AND pc.consecReque = prc.consecReque AND pc.idFase = prc.idFase AND pc.consProceso = prc.consProceso
      JOIN (
        SELECT ResCan.consePruebaCandi, 
               COUNT(CASE WHEN ResCan.resCandi = Res.respuesta THEN 1 END) AS correctas,
               (SELECT COUNT(respuesta) FROM Respuesta WHERE idPrueba = ResCan.idPrueba) AS total
        FROM RespuestaCandidato ResCan
        JOIN PreguntaCandidato PreCan ON ResCan.idPrueba = PreCan.idPrueba AND ResCan.consePregunta = PreCan.consePregunta AND ResCan.consePruebaCandi = PreCan.consePruebaCandi
        JOIN Pregunta Pre ON Pre.idPrueba = PreCan.idPrueba AND Pre.consePregunta = PreCan.consePregunta
        JOIN Respuesta Res ON Res.idPrueba = Pre.idPrueba AND Res.consePregunta = Pre.consePregunta
        GROUP BY ResCan.consePruebaCandi, ResCan.idPrueba
      ) conteo_respuestas ON prc.consePruebaCandi = conteo_respuestas.consePruebaCandi
      WHERE (correctas / total) >= 0.4
      AND pc.consProceso = 6 AND pc.consecReque = :requerimientoId
    `;

    const result = await connection.execute(query, { requerimientoId });

    // Obtener los metadatos y las filas del resultado
    const rows = result.rows;
    const meta = result.metaData;

    // Convertir los resultados a un array de objetos con los nombres de los atributos
    const candidates = rows.map(row => {
      let candidate = {};
      meta.forEach((col, index) => {
        candidate[col.name.toLowerCase()] = row[index];
      });
      return candidate;
    });

    return candidates;
  } catch (error) {
    console.error('Error obteniendo candidatos que pasaron la prueba:', error);
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
  getCandidatesPassedTest,
};
