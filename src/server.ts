const express = require("express"); //Biblioteca responsável por gerenciar a API

const bodyParser = require("body-parser"); //biblioteca para analisar o corpo das nossas requisições

const app = express(); //Instanciando variável responsável por manipular a API

const port = 505;

app.use(bodyParser.json()); //Liberando a API para manipular e tratar informações JSON

app.use(
    bodyParser.urlencoded({ //Liberando a API para receber e tratar informações URL encoded
        extended: true
    })
);

app.listen(port, function() {
    console.log(`API rodando na porta ${ port }!`);
});
