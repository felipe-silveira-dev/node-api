import { Router } from 'express';
import { studentsController } from '../controllers/students.controller.js';

export const boRouter = Router();

boRouter.get('/students', studentsController.index);