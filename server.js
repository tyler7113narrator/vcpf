'use strict';
const express = require('express');
const validarCpf = require('validar-cpf');
// Constants
const PORT = (process.env.PORT || 8080);
// App
const app = express();
app.get('/', (req, res) => {
 res.send('Hello world!');
});
app.get('/validar/:cpf', (req, res) => {
 var cpf = req.params.cpf;
 res.send(validarCpf(cpf)+'\n');
});

app.listen(PORT);
console.log(`Running listening on port ${PORT}`);
