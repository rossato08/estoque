const express = require('express');
const app = express();
const port = 3000;

const produtos = [
    { id:1, nome: 'Produto A', preço: 10.00 },
    { id:2, nome: 'Produto B', preço: 20.00 },
    { id:3, nome: 'Produto C', preço: 30.00 }
];



// funcionalidade para ecibir a pagina inicial 

app.get('/', (req, res) => {
    res.send('Página inicial!');
});

// funcionalidade para ver os produtos 

app.get('/produtos', (req, res) => {
    res.send(JSON.stringify(produtos))
});


// funcionalidade de procurar produtos por id e mensagem de erro caso nao tenhamos o id do produto 

app.get('/produtos/:id', (req, res) => {
    const id = req.params.id;
    const produto = produtos.find(p => p.id === parseInt(id));
    if (produto) {
        res.send(produto);
    } else {
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end('Produto não encontrado!!!');
    }

    res.send(JSON.stringify(produto))
});

// funcionalidade para contato e mandar contato

app.post('/contato', (req, res) => {
    res.send('dados recebidos!')

});




app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


