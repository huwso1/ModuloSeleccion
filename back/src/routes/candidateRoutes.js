import express from 'express';
import { 
    getAllCandidatesByDisciplineController,
    getCandidatesFifthPhaseController
 } from '../controllers/candidateController.js';
import { getCVByCandidateUserController } from '../controllers/CVController.js'

const router = express.Router();

router.get('/disciplina/:idRequerimiento', getAllCandidatesByDisciplineController);
router.get('/hv/:usuario', getCVByCandidateUserController);
router.get('/fase5/:idRequerimiento', getCandidatesFifthPhaseController);


export default router;
