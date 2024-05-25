import oracledb from 'oracledb';

async function createFourthPhase({ idusuario, invitacion, listacandidatos, idRequerimiento }) {
  let connection;
  try {
    connection = await oracledb.getConnection();

    // Obtener el idPerfil del proceso requerimiento
    const getPerfilIdQuery = `
      SELECT idPerfil
      FROM ProcesoRequerimiento
      WHERE idFase = '3' AND consecReque = :idRequerimiento AND ConsProceso = 3
    `;
    const perfilResult = await connection.execute(getPerfilIdQuery, { idRequerimiento });
    if (perfilResult.rows.length === 0) {
      throw new Error('No se encontró un perfil para el requerimiento y la fase especificados');
    }
    const idPerfil = perfilResult.rows[0][0];

    // Verificar si ya existe el registro en PerfilFase para la fase 4
    const checkPerfilFase4Query = `
      SELECT COUNT(*) AS count
      FROM PerfilFase
      WHERE idPerfil = :idPerfil AND idFase = '4'
    `;
    const perfilFase4Result = await connection.execute(checkPerfilFase4Query, { idPerfil });
    if (perfilFase4Result.rows[0][0] === 0) {
      // Si no existe, insertar el registro en PerfilFase para la fase 4
      const insertPerfilFase4Query = `
        INSERT INTO PerfilFase(idPerfil, idFase)
        VALUES(:idPerfil, '4')
      `;
      await connection.execute(insertPerfilFase4Query, { idPerfil });
    }

    // Insertar el proceso requerimiento para la fase 4
    const insertProcesoRequerimientoQuery = `
      INSERT INTO PROCESOREQUERIMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado, fechaInicio, invitacion)
      VALUES(4, :idRequerimiento, :idPerfil, '4', :idusuario, SYSDATE, :invitacion)
    `;
    await connection.execute(insertProcesoRequerimientoQuery, {
      idRequerimiento,
      idPerfil,
      idusuario,
      invitacion
    });

    // Insertar el proceso candidato para cada candidato en la lista
    for (const candidato of listacandidatos) {
      const insertProcesoCandidatoQuery = `
        INSERT INTO PROCESOCANDIDATO(usuario, idPerfil, idFase, consecReque, consProceso, fechaPresentacion)
        VALUES(:candidato, :idPerfil, '4', :idRequerimiento, 4, SYSDATE)
      `;
      await connection.execute(insertProcesoCandidatoQuery, {
        candidato,
        idPerfil,
        idRequerimiento
      });
    }

    // Commit al final de todas las operaciones
    await connection.execute('COMMIT');

  } catch (error) {
    console.error('Error creando la cuarta fase:', error);
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
  createFourthPhase
};