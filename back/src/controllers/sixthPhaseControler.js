// Controller: sixthPhaseController.js
import { createSixthPhase } from '../services/sixthPhaseService.js';

export const createSixthPhaseController = async (req, res) => {
  try {
    const { idusuario, idPrueba, fechaPresentacion, idRequerimiento } = req.body;

    // Verificar si todos los campos requeridos están presentes en el cuerpo de la solicitud
    if (!idusuario || !idPrueba || !fechaPresentacion || !idRequerimiento) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Llamar a la función createSixthPhase para crear la sexta fase
    await createSixthPhase({ idusuario, idPrueba, fechaPresentacion, idRequerimiento });

    // Enviar una respuesta exitosa si la sexta fase se ha creado correctamente
    res.status(201).json({ message: 'Sexta fase creada exitosamente' });
  } catch (error) {
    // Manejar cualquier error que pueda ocurrir durante la creación de la sexta fase
    console.error('Error creating sixth phase:', error);
    res.status(500).json({ error: 'Hubo un problema al crear la sexta fase' });
  }
};