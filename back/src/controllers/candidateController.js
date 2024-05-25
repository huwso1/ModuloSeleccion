import { getAllCandidatesByDiscipline } from '../services/candidateService.js';

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