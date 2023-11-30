import { Router } from 'express';
import { boController } from '../controllers/bo.controller.js';

export const boRouter = Router();

boRouter.get('/students', boController.index);