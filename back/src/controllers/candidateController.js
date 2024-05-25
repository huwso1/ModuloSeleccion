import { 
  getAllCandidatesByDiscipline,
  getCandidatesFifthPhase
} from '../services/candidateService.js';

export const getAllCandidatesByDisciplineController = async (req, res) => {
  try {
    const { idRequerimiento } = req.params;

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