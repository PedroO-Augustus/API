import { Client } from 'pg'; //Importando classe Client da biblioteca pg
import dotenv from 'dotenv';

dotenv.config(); //Importando arquivos de variáveis globais

var config =
{
    host: process.env.HOST, //pegando HOST das nossas variáveis de abmiente
    user: process.env.USER, //pegando USER das nossas variáveis de ambiente
    password: process.env.PASSWORD, //pegando PASSWORD das nossas variáveis de ambiente
    database: process.env.DATABASE, //pegando DATABASE das nossas variáveis de ambiente
    port: 5432 //pegando PORT das nossas variáveis de ambiente
}

const conn = new Client(config); //Instanciando nova conexão passando variáveis de ambiente como parâmetros

conn.connect(); //Utilizando método Connect para efetuar conexão com o banco

export { conn }; 