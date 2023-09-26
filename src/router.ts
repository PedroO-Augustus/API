import express from "express";

import * as costumersController from './controllers/costumersController';
import * as employeesController from './controllers/employeesController';
import * as productsController from './controllers/productController';
import * as ordersController from './controllers/ordersController';

const router = express.Router();

router.get('/costumers', costumersController.getCostumers);
router.post('/costumers', costumersController.createCostumer);

router.get('/employees', employeesController.getEmployees);
router.post('/employees', employeesController.createEmployees);

router.get('/products', productsController.getProducts);
router.post('/products', productsController.createProduct);

router.get('/orders', ordersController.getOrders);
router.post('/orders', ordersController.createOrder);

router.get('/', (_req, res) => res.status(200).send('O router está funcionando!'));

export { router };