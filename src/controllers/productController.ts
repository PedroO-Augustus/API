import * as productsModel from "../models/productsModel";

const getProducts = async (_req, res) => {
     
    const products = await productsModel.getProducts();

    return res.status(200).json(products);
};

const createProduct = async (req, res) => {

    const product = await productsModel.createProduct(req.body);

    return res.status(200).json(product); 
}

export { getProducts, createProduct };