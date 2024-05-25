import express from 'express';
import { getAllCandidatesByDisciplineController } from '../controllers/candidateController.js';
import { getCVByCandidateUserController } from '../controllers/CVController.js'

const router = express.Router();

router.get('/disciplina/:idRequerimiento', getAllCandidatesByDisciplineController);
router.get('/hv/:usuario', getCVByCandidateUserController);


export default router;
