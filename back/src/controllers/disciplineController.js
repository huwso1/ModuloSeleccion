import { getAllDisciplines } from '../services/disciplineService.js';

export const getAllDisciplinesController = async (req, res) => {
  try {
    const disciplines = await getAllDisciplines();
    res.json(disciplines);
  } catch (error) {
    console.error('Error getting disciplines:', error);
    res.status(500).json({ error: 'Hubo un problema al obtener las disciplinas' });
  }
};