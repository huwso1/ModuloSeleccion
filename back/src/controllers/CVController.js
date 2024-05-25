import { getCVByCandidateUser } from '../services/CVService.js';

export const getCVByCandidateUserController = async (req, res) => {
  try {
    const { usuario } = req.params;

    const cvString = await getCVByCandidateUser(usuario);

    res.send(cvString);
  } catch (error) {
    console.error('Error fetching CV by candidate user:', error);
    res.status(500).send('Hubo un problema al obtener el CV del candidato');
  }
};
