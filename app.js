//Importando Express
const express = require('express');
const app = express();

// Importando as rotas
const rotasUsuario = require('./routes/usuario');
const rotasIndex = require('./routes/index');
const rotasArea51 = require('./routes/area51');

//Capturar dados enviados pelos formulários
app.use(express.urlencoded({extended:false}));
app.use(express.json())

// Definição de rotas
app.use('/', rotasIndex);
app.use('/usuario', rotasUsuario);
app.use('/area51', rotasArea51);

// Definição do EJS como Template Engine e pasta Public
app.set('view engine', 'ejs');
app.use(express.static('public'));


// Levantando o servidor
app.listen(3000, () => console.log("Servidor rodando!"));