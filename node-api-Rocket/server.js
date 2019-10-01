//Buscando a função
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//Executando
const app = express();
app.use(express.json());
app.use(cors());
//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, 
    useUnifiedTopology: true } 
);

requireDir('./src/models');

//Aceita todas as requisições
app.use('/api', require('./src/routes'));

// "Ouvir a porta 3001 do navegador"
app.listen(3001);


