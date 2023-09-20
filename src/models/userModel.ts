import { conn } from "./connection";

const getAll = async () => {
    const client = await conn.execute('SELECT * FROM client');
    return client;
};

export {getAll};