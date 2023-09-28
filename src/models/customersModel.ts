import { conn } from "./connection";

const getCustomers = async () => {
    const customer = await conn.query('SELECT * FROM Customers');

    return customer;
};

const createCustomer = async (customer) => {
    const { name, phone, adress } = customer;
    const query = 'INSERT INTO Customers (name, phone, adress) VALUES (?, ?, ?)';
    const createdCustomer = await conn.query(query, [name, phone, adress]);
    return createdCustomer;
}

export { getCustomers, createCustomer };
