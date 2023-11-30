const { Router } = require('express');
const { boController } = require('../controllers/bo.controller');

const boRouter = Router();

boRouter.get('/students', boController.index);


exports.boRouter = boRouter;