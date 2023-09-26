import { conn } from "./connection";

const getEmployees = async () => {
    const costumer = await conn.query('SELECT * FROM employees',);
    return costumer;
};

const createEmployees = async (employee: { name: any, position:any, hireDate:any, salary:any }) => {
    const { name, position, hireDate, salary } = employee;
    const createdEmployee = await conn.query('INSERT INTO employees (Name, Position, HireDate, Salary) VALUES (?, ?, ?, ?)',[name, position, hireDate, salary]);
    return createdEmployee;
}

export { getEmployees, createEmployees };