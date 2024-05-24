import express from 'express';
import * as employeeController from '../controllers/employeeController.js';

const router = express.Router();

router.get('/analistas-generales', employeeController.getAllGeneralAnalyst);


export default router;