import { 
  createRequirement,
  getRequirementsByGeneralAnalystId,
 } from '../services/requirementService.js';

export const createRequirementController = async (req, res) => {
  try {
    const { salariomax, salariomin, descfuncion, descCarreras, numVacantes, codEmpleado, analistaG } = req.body;

    // Verificar si todos los campos requeridos están presentes en el cuerpo de la solicitud
    if (!salariomax || !salariomin || !descfuncion || !descCarreras || !numVacantes || !codEmpleado || !analistaG) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Llamar a la función createRequirement para insertar el requerimiento en la base de datos
    const newRequirementId = await createRequirement(salariomax, salariomin, descfuncion, descCarreras, numVacantes, codEmpleado, analistaG);

    // Enviar una respuesta exitosa junto con el ID del requerimiento creado
    res.status(201).json({ message: 'Requerimiento creado exitosamente', id: newRequirementId });
  } catch (error) {
    // Manejar cualquier error que pueda ocurrir durante la creación del requerimiento
    console.error('Error creating requirement:', error);
    res.status(500).json({ error: 'Hubo un problema al crear el requerimiento' });
  }
};

export const getRequirementsByGeneralAnalystIdController = async (req, res) => {
  try {
    const { id } = req.params;
    console.error(id);
    // Verificar si el ID está presente
    if (!id) {
      
      return res.status(400).json({ error: 'El ID (CODIGO )del analista es obligatorio' });
    }

    // Llamar a la función getRequirementsByGeneralAnalystId para obtener los requerimientos
    const requirements = await getRequirementsByGeneralAnalystId(id);

    // Enviar una respuesta exitosa con los requerimientos encontrados en formato JSON
    res.status(200).json(requirements);
  } catch (error) {
    // Manejar cualquier error que pueda ocurrir durante la obtención de los requerimientos
    console.error('Error getting requirements by general analyst ID:', error);
    res.status(500).json({ error: 'Hubo un problema al obtener los requerimientos' });
  }
};