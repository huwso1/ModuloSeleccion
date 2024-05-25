import oracledb from 'oracledb';

async function getCVByCandidateUser(usuario) {
  let connection;
  try {
    connection = await oracledb.getConnection();

    const query = `
      SELECT C.nombre, C.apellido, C.nDoc AS documento, TD.descTipoDoc AS tipoDocumento, 
             TO_CHAR(C.fechaNac, 'YYYY-MM-DD') AS fechaNac, D.descDisciplina AS disciplina, 
             I.nomInstitucion AS institucion, TIP.descTipoItemPerfil AS ItemPerfil, 
             TO_CHAR(HV.fechaIniAct, 'YYYY-MM-DD') AS fechaIniAct, 
             TO_CHAR(HV.fechaFinAct, 'YYYY-MM-DD') AS fechaFinAct, 
             HV.descActividad AS actividad, HV.funcionactividad AS funcion
      FROM TipoDoc TD
      JOIN Candidato C ON TD.idTipoDoc = C.idTipoDoc
      JOIN Disciplina D ON D.idDisciplina = C.idDisciplina
      JOIN HV ON HV.usuario = C.usuario
      JOIN Institucion I ON I.codInstitucion = HV.codInstitucion
      JOIN TipoItemPerfil TIP ON HV.idTipoItemPerfil = TIP.idTipoItemPerfil
      WHERE C.usuario = :usuario
    `;

    const result = await connection.execute(query, { usuario });

    if (result.rows.length === 0) {
      return 'No se encontraron datos para este usuario';
    }

    const generalInfo = `
        HOJA DE VIDA

        Nombre: ${result.rows[0][0]}
        Apellido: ${result.rows[0][1]}
        Documento: ${result.rows[0][2]}
        Tipo de documento: ${result.rows[0][3]}
        Fecha de nacimiento: ${result.rows[0][4]}
        Disciplina: ${result.rows[0][5]}\n\n`;

    const cvDetails = result.rows.map(row => {
        return `Institución: ${row[6]}
                Item de perfil: ${row[7]}
                Fecha de inicio: ${row[8]}
                Fecha de fin: ${row[9]}
                Actividad: ${row[10]}
                Función: ${row[11]}\n\n`;
            }).join('');

    return generalInfo + cvDetails;
  } catch (error) {
    console.error('Error fetching CV by candidate user:', error);
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
  getCVByCandidateUser
};