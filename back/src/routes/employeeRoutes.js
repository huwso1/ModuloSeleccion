import express from 'express';
import * as employeeController from '../controllers/employeeController.js';

const router = express.Router();

router.get('/analistas-generales', employeeController.getAllGeneralAnalyst);
router.post('/crear', employeeController.createEmployeeController);
router.post('/iniciar-sesion', employeeController.employeeLoginController);

export default router;