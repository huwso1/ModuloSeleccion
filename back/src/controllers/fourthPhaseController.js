import { createFourthPhase } from '../services/fourthPhaseService.js';

export const createFourthPhaseController = async (req, res) => {
  try {
    const { idusuario, invitacion, listacandidatos, idRequerimiento } = req.body;

    // Verificar si todos los campos requeridos están presentes en el cuerpo de la solicitud
    if (!idusuario || !invitacion || !listacandidatos || !idRequerimiento) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Llamar a la función createFourthPhase para crear la cuarta fase
    await createFourthPhase({ idusuario, invitacion, listacandidatos, idRequerimiento });

    // Enviar una respuesta exitosa si la cuarta fase se ha creado correctamente
    res.status(201).json({ message: 'Cuarta fase creada exitosamente' });
  } catch (error) {
    // Manejar cualquier error que pueda ocurrir durante la creación de la cuarta fase
    console.error('Error creando la cuarta fase:', error);
    res.status(500).json({ error: 'Hubo un problema al crear la cuarta fase' });
  }
};