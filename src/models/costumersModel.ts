import { conn } from "./connection";

const getCostumers = async () => {
    const costumer = await conn.query('SELECT * FROM costumers');
    return costumer;
};

const createCostumer = async (costumer: { name: any; }) => {
    const { name } = costumer;
    const createdCostumer = await conn.query('INSERT INTO costumers (name, Phone, Adress) VALUES (?, ?, ?)',[]);
    return createdCostumer;
}

export { getCostumers };