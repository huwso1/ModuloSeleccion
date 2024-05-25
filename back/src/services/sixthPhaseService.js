// Service: sixthPhaseService.js
import oracledb from 'oracledb';

async function createSixthPhase({ idusuario, idPrueba, fechaPresentacion, idRequerimiento }) {
  let connection;
  try {
    connection = await oracledb.getConnection();

    // Obtener el idPerfil del proceso requerimiento
    const getPerfilIdQuery = `
      SELECT idPerfil
      FROM ProcesoRequerimiento
      WHERE idFase = '5' AND consecReque = :idRequerimiento AND ConsProceso = 5
    `;
    const perfilResult = await connection.execute(getPerfilIdQuery, { idRequerimiento });
    if (perfilResult.rows.length === 0) {
      throw new Error('No se encontró un perfil para el requerimiento y la fase especificados');
    }
    const idPerfil = perfilResult.rows[0][0];

    // Verificar si ya existe el registro en PerfilFase para la fase 6
    const checkPerfilFase6Query = `
      SELECT COUNT(*) AS count
      FROM PerfilFase
      WHERE idPerfil = :idPerfil AND idFase = '6'
    `;
    const perfilFase6Result = await connection.execute(checkPerfilFase6Query, { idPerfil });
    if (perfilFase6Result.rows[0].count === 0) {
      // Si no existe, insertar el registro en PerfilFase para la fase 6
      const insertPerfilFase6Query = `
        INSERT INTO PerfilFase(idPerfil, idFase)
        VALUES(:idPerfil, '6')
      `;
      await connection.execute(insertPerfilFase6Query, { idPerfil });
    }

    // Insertar el proceso requerimiento para la fase 6
    const insertProcesoRequerimientoQuery = `
      INSERT INTO PROCESOREQUERIMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado, fechaInicio)
      VALUES(6, :idRequerimiento, :idPerfil, '6', :idusuario, SYSDATE)
    `;
    await connection.execute(insertProcesoRequerimientoQuery, { idRequerimiento, idPerfil, idusuario });

    // Obtener candidatos de la fase anterior
    const getCandidatesQuery = `
      SELECT C.usuario
      FROM Candidato C
      JOIN ProcesoCandidato PC ON C.usuario = PC.usuario
      WHERE PC.idPerfil = :idPerfil AND
            PC.idFase = '5' AND
            PC.consecReque = :idRequerimiento AND
            PC.consProceso = 5
    `;
    const candidatesResult = await connection.execute(getCandidatesQuery, { idPerfil, idRequerimiento });
    const candidates = candidatesResult.rows;

    // Insertar cada candidato en la fase 6
    const insertProcesoCandidatoQuery = `
      INSERT INTO PROCESOCANDIDATO(usuario, idPerfil, idFase, consecReque, consProceso, fechaPresentacion)
      VALUES(:candidato, :idPerfil, '6', :idRequerimiento, 6, SYSDATE)
    `;
    const insertPruebaCandidatoQuery = `
      INSERT INTO PRUEBACANDIDATO(consePruebaCandi, usuario, idPerfil, idFase, consecReque, ConsProceso, idPrueba, fechaPres)
      VALUES(PRUEBA_CANDIDATO_SEQ.NEXTVAL, :candidato, :idPerfil, '6', :idRequerimiento, 6, :idPrueba, TO_DATE(:fechaPresentacion, 'YYYY-MM-DD'))
    `;

    for (const candidate of candidates) {
      await connection.execute(insertProcesoCandidatoQuery, { candidato: candidate[0], idPerfil, idRequerimiento });
      await connection.execute(insertPruebaCandidatoQuery, { candidato: candidate[0], idPerfil, idRequerimiento, idPrueba, fechaPresentacion });
    }

    await connection.execute('COMMIT');

  } catch (error) {
    console.error('Error creating sixth phase:', error);
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
  createSixthPhase
};