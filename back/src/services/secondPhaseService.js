import oracledb from 'oracledb';

async function createSecondPhase({ Disciplina, Perfil, descfuncion, idRequerimiento, idusuario }) {
  let connection;
  try {
    connection = await oracledb.getConnection();

    const checkPerfilFase1Query = `
      SELECT COUNT(*) AS count
      FROM PerfilFase
      WHERE idPerfil = :Perfil AND idFase = '1'
    `;
    
    const checkPerfilFase2Query = `
      SELECT COUNT(*) AS count
      FROM PerfilFase
      WHERE idPerfil = :Perfil AND idFase = '2'
    `;

    const insertPerfilFase1Query = `
      INSERT INTO PerfilFase(idPerfil, idFase)
      VALUES(:Perfil, '1')
    `;

    const insertPerfilFase2Query = `
      INSERT INTO PerfilFase(idPerfil, idFase)
      VALUES(:Perfil, '2')
    `;

    const insertProcesoRequerimiento1Query = `
      INSERT INTO PROCESOREQUERIMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado, fechaInicio)
      VALUES(1, :idRequerimiento, :Perfil, '1', :idusuario, SYSDATE)
    `;

    const insertProcesoRequerimiento2Query = `
      INSERT INTO PROCESOREQUERIMIENTO(ConsProceso, consecReque, idPerfil, idFase, codEmpleado, fechaInicio)
      VALUES(2, :idRequerimiento, :Perfil, '2', :idusuario, SYSDATE)
    `;

    // verificar e insertar perfilFase 1
    let result = await connection.execute(checkPerfilFase1Query, { Perfil });
    if (result.rows[0].count === 0) {
      await connection.execute(insertPerfilFase1Query, { Perfil });
    }

    // Insert into ProcesoRequerimiento fase 1
    await connection.execute(insertProcesoRequerimiento1Query, { idRequerimiento, Perfil, idusuario });

    // Verificar e insertar PerfilFase fase 2
    result = await connection.execute(checkPerfilFase2Query, { Perfil });
    if (result.rows[0].count === 0) {
      await connection.execute(insertPerfilFase2Query, { Perfil });
    }

    // Insert into ProcesoRequerimiento fase 2
    await connection.execute(insertProcesoRequerimiento2Query, { idRequerimiento, Perfil, idusuario });

    await connection.execute('COMMIT');

  } catch (error) {
    console.error('Error creating second phase:', error);
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
  createSecondPhase
};
