import express from 'express';
import { 
    createRequirementController,
    getRequirementsByGeneralAnalystIdController,
} from '../controllers/requirementController.js';

import { createSecondPhaseController } from '../controllers/secondPhaseController.js';
import { createThirdPhaseController } from '../controllers/thirdPhaseController.js';
import { createFourthPhaseController } from '../controllers/fourthPhaseController.js';
import { createFifthPhaseController } from '../controllers/fifthPhaseController.js';
import { createSixthPhaseController } from '../controllers/sixthPhaseControler.js'

const router = express.Router();

// Ruta para crear un nuevo requerimiento
router.post('/crear', createRequirementController);
router.get('/analista-general/:id', getRequirementsByGeneralAnalystIdController);
router.post('/fase2', createSecondPhaseController);
router.post('/fase3', createThirdPhaseController);
router.post('/fase4', createFourthPhaseController);
router.post('/fase5', createFifthPhaseController);
router.post('/fase6', createSixthPhaseController);

export default router;
