import * as employeesModel from "../models/employeesModel";

const getEmployees = async (_req, res) => {
     
    const costumers = await employeesModel.getEmployees();

    return res.status(200).json(costumers);
};

const createEmployees = async (req, res) => {

    const employee = await employeesModel.createEmployees(req.body);

    return res.status(200).json(employee); 
}

export { getEmployees, createEmployees };