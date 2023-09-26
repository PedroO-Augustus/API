import { conn } from "./connection";

const getCostumers = async () => {
    const costumer = await conn.query('SELECT * FROM costumers',);
    return costumer;
};

const createCostumer = async (costumer: { name: any, phone: any, adress: any }) => {
    const { name, phone, adress } = costumer;
    const createdCostumer = await conn.query('INSERT INTO costumers (name, phone, Adress) VALUES (?, ?, ?)', [name, phone, adress]);
    return createdCostumer;
}

export { getCostumers, createCostumer };