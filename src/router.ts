import express from "express";

import * as costumersController from './controllers/costumersController';

const router = express.Router();

router.get('/costumers', costumersController.getCostumers);

// router.get('/', (req, res) => res.status(200).send('O router está funcionando!'));

export { router };