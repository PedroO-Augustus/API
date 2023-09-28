import express from "express";

import { conn } from "./models/connection";
import * as customersController from './controllers/customersController';
import * as employeesController from './controllers/employeesController';
import * as productsController from './controllers/productController';
import * as ordersController from './controllers/ordersController';

const router = express.Router();

router.get('/customers', customersController.getCustomers);
router.post('/customers', customersController.createCustomer);

// router.get('/employees', employeesController.getEmployees);
// router.post('/employees', employeesController.createEmployees);

// router.get('/products', productsController.getProducts);
// router.post('/products', productsController.createProduct);

// router.get('/orders', ordersController.getOrders);
// router.post('/orders', ordersController.createOrder);

router.get('/', (_req, res) => res.status(200).send('O router está funcionando!'));

export { router };