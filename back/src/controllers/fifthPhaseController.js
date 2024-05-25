import { createFifthPhase } from '../services/fifthPhaseService.js';

export const createFifthPhaseController = async (req, res) => {
  try {
    const { idusuario, listacandidatos, idRequerimiento } = req.body;

    // Verificar si todos los campos requeridos están presentes en el cuerpo de la solicitud
    if (!idusuario || !listacandidatos || !idRequerimiento) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Llamar a la función createFifthPhase para crear la quinta fase
    await createFifthPhase({ idusuario, listacandidatos, idRequerimiento });

    // Enviar una respuesta exitosa si la quinta fase se ha creado correctamente
    res.status(201).json({ message: 'Quinta fase creada exitosamente' });
  } catch (error) {
    // Manejar cualquier error que pueda ocurrir durante la creación de la quinta fase
    console.error('Error creating fifth phase:', error);
    res.status(500).json({ error: 'Hubo un problema al crear la quinta fase' });
  }
};