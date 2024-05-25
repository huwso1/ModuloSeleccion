import oracledb from 'oracledb';

async function createFifthPhase({ idusuario, listacandidatos, idRequerimiento }) {
  let connection;
  try {
    connection = await oracledb.getConnection();

    // Obtener el idPerfil del proceso requerimiento
    const getPerfilIdQuery = `
      SELECT idPerfil
      FROM ProcesoRequerimiento
      WHERE idFase = '4' AND consecReque = :idRequerimiento AND ConsProceso = 4
    `;
    const perfilResult = await connection.execute(getPerfilIdQuery, { idRequerimiento });

    if (perfilResult.rows.length === 0) {
      throw new Error('No se encontró un perfil para el requerimiento y la fase especificados');
    }

    const idPerfil = perfilResult.rows[0][0];

    // Verificar si ya existe el registro en PerfilFase para la fase 5
    const checkPerfilFase5Query = `
      SELECT COUNT(*) AS count
      FROM PerfilFase
      WHERE idPerfil = :idPerfil AND idFase = '5'
    `;
    const perfilFase5Result = await connection.execute(checkPerfilFase5Query, { idPerfil });

    if (perfilFase5Result.rows[0][0] === 0) {
      // Si no existe, insertar el registro en PerfilFase para la fase 5
      const insertPerfilFase5Query = `
        INSERT INTO PerfilFase(idPerfil, idFase)
        VALUES(:idPerfil, '5')
      `;
      await connection.execute(insertPerfilFase5Query, { idPerfil });
    }

    // Insertar el proceso requerimiento para la fase 5
    const insertProcesoRequerimientoQuery = `
      INSERT INTO PROCESOREQUERIMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado, fechaInicio)
      VALUES(5, :idRequerimiento, :idPerfil, '5', :idusuario, SYSDATE)
    `;
    await connection.execute(insertProcesoRequerimientoQuery, { idRequerimiento, idPerfil, idusuario });

    // Insertar cada candidato en el proceso candidato
    const insertProcesoCandidatoQuery = `
      INSERT INTO PROCESOCANDIDATO(usuario, idPerfil, idFase, consecReque, consProceso, fechaPresentacion)
      VALUES(:candidato, :idPerfil, '5', :idRequerimiento, 5, SYSDATE)
    `;

    for (const candidato of listacandidatos) {
      await connection.execute(insertProcesoCandidatoQuery, { candidato, idPerfil, idRequerimiento });
    }

    await connection.execute('COMMIT');

  } catch (error) {
    console.error('Error creating fifth phase:', error);
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

export { createFifthPhase };