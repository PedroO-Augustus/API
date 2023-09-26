import * as costumersModel from "../models/costumersModel";

const getCostumers = async (_req, res) => {
     
    const costumers = await costumersModel.getCostumers();

    return res.status(200).json(costumers);
};

const createCostumer = async (req, res) => {

    const costumer = await costumersModel.createCostumer(req.body);

    return res.status(200).json(costumer);
}

export { getCostumers, createCostumer };