import * as costumersModel from "../models/costumersModel";

const getCostumers = async (req: any, res: any) => {
     
    const costumers = await costumersModel.getCostumers();

    return res.status(200).json(costumers);
};

export { getCostumers };