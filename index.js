const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

(async () => {


const connectionString = 'mongodb://localhost:27017'

console.info('Conectando ao bando de dados MongoDB...');

const options = {
    useUnifiedTopology: true
};

const client = await mongodb.MongoClient.connect(connectionString, options);

console.info('MongoDb conectado com sucesso!');

console.log(client);

const app = express();

const port = 3000;

// Precisamos avisar o Express para utilizar o body-parser
// Assim, ele saberá como transformar as informações no BODY da requisição
//      em informação útil para a programação

app.use(bodyParser.json());

/*
-> Create, Read (All/Single), Update & Delete
-> Criar, Ler (Tudo ou Individual), Atualizar e Remover
*/

/*
URL -> http://localhost:3000
Endpoint ou Rota -> [GET] /mensagem
Endpoint ou Rota -> [POST] /mensagem
Endpoint: [GET] /mensagem
Descrição: Ler todas as mensagens
Endpoint: [POST] /mensagem
Descrição: Criar uma mensagem
Endpoint: [GET] /mensagem/{id}
Descrição: Ler mensagem específica pelo ID
Exemplo: [GET] /mensagem/1
Endpoint: [PUT] /mensagem/{id}
Descrição: Edita mensagem específica pelo ID
Endpoint: [DELETE] /mensagem/{id}
Descrição: Remove mensagem específica pelo ID
*/

app.get('/', function (req, res) {
  res.send('Hello World');
});

const mensagens = [
    {
        id: 1,
        texto: 'Essa é uma mensagem'
    },
    {
        id: 2,
        texto: 'Essa é outra mensagem'
    }
];

// Read All
app.get('/mensagem', function (req, res) {
    res.send(mensagens.filter(Boolean));
});

// Create
app.post('/mensagem', function (req, res) {
    const texto = req.body.texto;

    const mensagem = {
        'id': mensagens.length + 1,
        'texto': texto
    };

    mensagens.push(mensagem);

    res.send(mensagem);
});

// Read Single
app.get('/mensagem/:id', function (req, res) {
    const id = req.params.id;

    const mensagem = mensagens[id - 1];

    res.send(mensagem);
});

// Update
app.put('/mensagem/:id', function (req, res) {
    const id = req.params.id;
    const texto = req.body.texto;

    mensagens[id - 1].texto = texto;

    res.send(mensagens[id - 1]);
});

// Delete
app.delete('/mensagem/:id', function (req, res) {
    const id = req.params.id;

    delete mensagens[id - 1];

    res.send(`A mensagem de ID ${id} foi removida com sucesso.`);
});

app.listen(port, function () {
    console.info('App rodando em http://localhost:' + port);
});

})();