
const fs = require('fs')
const express = require('express');
const app = express()
const port = 3000
const rotasUsuarios = require('./rotasUsuarios') 
const rotasProdutos = require('./rotasProdutos')
const rotasAdmin = require('./rotasAdmin')

app.use('/usuarios', rotasUsuarios)
app.use('/produtos', rotasProdutos)
app.use('/admin', rotasAdmin)


app.get('/', (req, res) => {
    res.status(200).send('<h1>Página Inicial</h1>');
});

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});
