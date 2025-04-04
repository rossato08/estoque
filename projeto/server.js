const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const rotasAdmin = require('./rotasalteraritem');
const rotasProdutos = require('./rotasprodutos');


app.use(express.json());  

app.get('/', (req, res) => {
    res.status(200).send('<h1>Página inicial</h1>');
});

app.use('/produtos', rotasProdutos);
app.use('/admin', rotasAdmin);

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});
