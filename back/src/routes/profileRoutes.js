import express from 'express';
import { getAllProfilesController } from '../controllers/profileController.js';

const router = express.Router();

// Ruta para obtener todos los perfiles
router.get('/', getAllProfilesController);

export default router;
