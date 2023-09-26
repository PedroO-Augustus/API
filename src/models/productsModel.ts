import { conn } from "./connection";

const getProducts = async () => {
    const costumer = await conn.query('SELECT * FROM products',);
    return costumer;
};

const createProduct = async (product: { name: any, price: any, stock: any}) => {
    const { name, price, stock } = product;
    const createdProduct = await conn.query('INSERT INTO Products (Name, Price, Stock) VALUES VALUES (?, ?, ?)',[name, price, stock]);
    return createdProduct;
}

export { getProducts, createProduct };