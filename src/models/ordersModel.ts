import { conn } from "./connection";

const getOrders = async () => {
    const order = await conn.query('SELECT * FROM orders',);
    return order;
};

const createOrder = async (order: { customerID: any, orderDate: any, Status: any, TableNumber: any }) => {
    const { customerID, orderDate, Status, TableNumber } = order;
    const createdOrder = await conn.query('INSERT INTO Orders (CustomerID, OrderDate, Status, TableNumber) VALUES (?, ?, ?, ?)',[customerID, orderDate, Status, TableNumber]);
    return createdOrder;
}

export { getOrders, createOrder };