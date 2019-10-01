const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');


// Toda a vez que o usuário acessar a rota
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

// * put => atualização
// * post => inserção
// * get => listagem
// * delete => deletar

// * '/' => rota raiz
// * req => requisição pro servidor, contém todos os detalhes da requisição
// * res => resposta para a requisição
// * res.send() => envia a resposta

module.exports = routes;