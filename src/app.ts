import  express from "express"; //Biblioteca responsável por gerenciar a API

import bodyParser from "body-parser"; //biblioteca para analisar o corpo das nossas requisições

import { router } from "./router";

const app = express(); //Instanciando variável responsável por manipular a API

app.use(router);

app.use(bodyParser.json()); //Liberando a API para manipular e tratar informações JSON

app.use(
    bodyParser.urlencoded({ //Liberando a API para receber e tratar informações URL encoded
        extended: true
    })
);

export { app };