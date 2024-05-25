import { createSecondPhase } from '../services/secondPhaseService.js';

export const createSecondPhaseController = async (req, res) => {
  try {
    const { Disciplina, Perfil, descfuncion, idRequerimiento, idusuario } = req.body;

    // Verificar si todos los campos requeridos están presentes en el cuerpo de la solicitud
    if (!Perfil || !idRequerimiento || !idusuario) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    await createSecondPhase({ Disciplina, Perfil, descfuncion, idRequerimiento, idusuario });

    // Enviar una respuesta exitosa si la segunda fase se ha creado correctamente
    res.status(201).json({ message: 'Segunda fase creada exitosamente' });
  } catch (error) {
    // Manejar cualquier error que pueda ocurrir durante la creación de la segunda fase
    console.error('Error creating second phase:', error);
    res.status(500).json({ error: 'Hubo un problema al crear la segunda fase' });
  }
};