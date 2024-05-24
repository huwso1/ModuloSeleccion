import express from 'express';
import { getAllDisciplinesController } from '../controllers/disciplineController.js';

const router = express.Router();

// Ruta para obtener todas las disciplinas
router.get('/', getAllDisciplinesController);

export default router;