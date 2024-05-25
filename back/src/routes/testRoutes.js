import express from 'express';
import { getTestsForRequirementController } from '../controllers/testController.js';

const router = express.Router();

router.get('/requerimiento/:idRequerimiento', getTestsForRequirementController);

export default router;