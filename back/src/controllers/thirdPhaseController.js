import { createThirdPhase } from '../services/thirdPhaseService.js';

export const createThirdPhaseController = async (req, res) => {
  try {
    const { Convocatoria, idRequerimiento, idusuario } = req.body;

    // Verificar si todos los campos requeridos están presentes en el cuerpo de la solicitud
    if (!Convocatoria || !idRequerimiento || !idusuario) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Llamar a la función createThirdPhase para crear la tercera fase
    await createThirdPhase({ Convocatoria, idRequerimiento, idusuario });

    // Enviar una respuesta exitosa si la tercera fase se ha creado correctamente
    res.status(201).json({ message: 'Tercera fase creada exitosamente' });
  } catch (error) {
    // Manejar cualquier error que pueda ocurrir durante la creación de la tercera fase
    console.error('Error creating third phase:', error);
    res.status(500).json({ error: 'Hubo un problema al crear la tercera fase' });
  }
};
