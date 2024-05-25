// Service: thirdPhaseService.js
import oracledb from 'oracledb';

async function createThirdPhase({ Convocatoria, idRequerimiento, idusuario }) {
  let connection;
  try {
    connection = await oracledb.getConnection();

    // Obtener el idPerfil del proceso requerimiento
    const getPerfilIdQuery = `
      SELECT idPerfil
      FROM ProcesoRequerimiento
      WHERE idFase = '2' AND consecReque = :idRequerimiento AND ConsProceso = 2
    `;
    const perfilResult = await connection.execute(getPerfilIdQuery, { idRequerimiento });
    if (perfilResult.rows.length === 0) {
      throw new Error('No se encontró un perfil para el requerimiento y la fase especificados');
    }
    const idPerfil = perfilResult.rows[0][0];

    // Verificar si ya existe el registro en PerfilFase para la fase 3
    const checkPerfilFase3Query = `
      SELECT COUNT(*) AS count
      FROM PerfilFase
      WHERE idPerfil = :idPerfil AND idFase = '3'
    `;
    const perfilFase3Result = await connection.execute(checkPerfilFase3Query, { idPerfil });
    if (perfilFase3Result.rows[0].count === 0) {
      // Si no existe, insertar el registro en PerfilFase para la fase 3
      const insertPerfilFase3Query = `
        INSERT INTO PerfilFase(idPerfil, idFase)
        VALUES(:idPerfil, '3')
      `;
      await connection.execute(insertPerfilFase3Query, { idPerfil });
    }

    // Insertar el proceso requerimiento para la fase 3
    const insertProcesoRequerimientoQuery = `
      INSERT INTO PROCESOREQUERIMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado, fechaInicio, convocatoria)
      VALUES(3, :idRequerimiento, :idPerfil, '3', :idusuario, SYSDATE, :Convocatoria)
    `;
    await connection.execute(insertProcesoRequerimientoQuery, { idRequerimiento, idPerfil, idusuario, Convocatoria });

    await connection.execute('COMMIT');

  } catch (error) {
    console.error('Error creating third phase:', error);
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
  createThirdPhase
};