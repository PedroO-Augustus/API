import * as ordersModel from "../models/ordersModel";

const getOrders = async (_req, res) => {
     
    const orders = await ordersModel.getOrders();

    return res.status(200).json(orders);
};

const createOrder = async (req, res) => {

    const order = await ordersModel.createOrder(req.body);

    return res.status(200).json(order); 
}

export { getOrders, createOrder };