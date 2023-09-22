import { conn } from "./connection";

const getCostumers = async () => {
    const costumer = await conn.execute('SELECT * FROM costumers');
    return costumer;
};

export { getCostumers };