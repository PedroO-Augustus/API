/*const pgsql = require('postgresql'); //Importando biblioteca responsável pela comunicação com a camada de banco de dados

require('dotenv').config(); //Importando arquivos de variáveis globais

// Criando variáveis de configuração do PGSQL
var config =
{
    host: process.env.HOST, //pegando HOST das nossas variáveis de abmiente
    user: process.env.USER, //pegando USER das nossas variáveis de ambiente
    password: process.env.PASSWORD, //pegando PASSWORD das nossas variáveis de ambiente
    database: process.env.DATABASE, //pegando DATABASE das nossas variáveis de ambiente
    port: process.env.PORT //pegando PORT das nossas variáveis de ambiente
}

const conn = new pgsql.createConnection(config); //Criando variável de conexão*/

import { Client } from 'pg';

require('dotenv').config(); //Importando arquivos de variáveis globais

var config =
{
    host: process.env.HOST, //pegando HOST das nossas variáveis de abmiente
    user: process.env.USER, //pegando USER das nossas variáveis de ambiente
    password: process.env.PASSWORD, //pegando PASSWORD das nossas variáveis de ambiente
    database: process.env.DATABASE, //pegando DATABASE das nossas variáveis de ambiente
    port: 5432 //pegando PORT das nossas variáveis de ambiente
}

const conn = new Client(config);

conn.connect();

conn.query('SELECT * FROM Costumers', (err, res) => {
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    conn.end;
});

export { conn };