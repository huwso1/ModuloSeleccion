import { 
  getAllCandidatesByDiscipline,
  getCandidatesFifthPhase,
  getCandidatesPassedTest
} from '../services/candidateService.js';

export const getAllCandidatesByDisciplineController = async (req, res) => {
  try {
    const { idRequerimiento } = req.params;
    console.error(idRequerimiento);

    const candidates = await getAllCandidatesByDiscipline(idRequerimiento);

    res.json(candidates);
  } catch (error) {
    console.error('Error fetching candidates by discipline:', error);
    res.status(500).json({ error: 'Hubo un problema al obtener los candidatos por disciplina' });
  }
};

export const getCandidatesFifthPhaseController = async (req, res) => {
  try {
    const { idRequerimiento } = req.params;

    if (!idRequerimiento) {
      return res.status(400).json({ error: 'El idRequerimiento es obligatorio' });
    }

    const candidates = await getCandidatesFifthPhase(idRequerimiento);

    res.status(200).json(candidates);
  } catch (error) {
    console.error('Error obteniendo candidatos para la quinta fase:', error);
    res.status(500).json({ error: 'Hubo un problema al obtener los candidatos para la quinta fase' });
  }
};

export const getCandidatesPassedTestController = async (req, res) => {
  try {
    const { idRequerimiento } = req.params;

    // Verificar si el parámetro requerido está presente
    if (!idRequerimiento) {
      return res.status(400).json({ error: 'El parámetro idRequerimiento es obligatorio' });
    }

    // Llamar a la función getCandidatesPassedTest para obtener los candidatos
    const candidates = await getCandidatesPassedTest(idRequerimiento);

    // Enviar una respuesta exitosa con los datos de los candidatos
    res.status(200).json(candidates);
  } catch (error) {
    // Manejar cualquier error que pueda ocurrir durante la obtención de los candidatos
    console.error('Error obteniendo candidatos que pasaron la prueba:', error);
    res.status(500).json({ error: 'Hubo un problema al obtener los candidatos' });
  }
};