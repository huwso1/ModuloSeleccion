import { getTestsForRequirement } from '../services/testService.js';

export const getTestsForRequirementController = async (req, res) => {
  try {
    const { idRequerimiento } = req.params;

    // Verificar si el idRequerimiento es válido
    if (!idRequerimiento) {
      return res.status(400).json({ error: 'Se requiere un ID de requerimiento válido' });
    }

    // Llamar al servicio para obtener las pruebas asociadas al requerimiento
    const tests = await getTestsForRequirement(idRequerimiento);

    // Enviar las pruebas como respuesta
    res.status(200).json(tests);
  } catch (error) {
    console.error('Error in getTestsForRequirementController:', error);
    res.status(500).json({ error: 'Hubo un problema al obtener las pruebas para el requerimiento' });
  }
};