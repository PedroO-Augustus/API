import * as customersModel from "../models/customersModel";

const getCustomers = async (req, res) => {
    const customers = await customersModel.getCustomers();

    return res.status(200).json(customers.rows);
};

const createCustomer = async (req, res) => {
    const customer = await customersModel.createCustomer(req.body);

    return res.status(200).json(customer);

    // return res.status(201).json(req.body);
}

export { getCustomers, createCustomer };
