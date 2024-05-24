import express from 'express';
import { 
    createRequirementController,
    getRequirementsByGeneralAnalystIdController,
 } from '../controllers/requirementController.js';

const router = express.Router();

// Ruta para crear un nuevo requerimiento
router.post('/crear', createRequirementController);
router.get('/analista-general/:id', getRequirementsByGeneralAnalystIdController);


export default router;
