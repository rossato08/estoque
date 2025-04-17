const express = require('express');
const router = express.Router();
const fs = require('fs');




// criando logger ele cria arquivo quando nao existente e adiciona informaçoes em baixo do ultimo acesso 
const logger = (req, res, next)=>{
    const data = new Date();
    const linha =` Data do acesso ao sistema : [${data.toISOString()}]  \n `;
    
  
            fs.appendFile('logger.txt',linha, err =>{
                if (err) throw err;
                console.log('Informação Adicionada!');
              });

              next();
        }
   
router.use(logger);



// ler arquivo json

let produtos = [];
try {
    const data = fs.readFileSync('produtos.json', 'utf8');
    produtos = JSON.parse(data);
} catch (error) {
    console.log('Erro ao ler arquivo produtos.json', error);
}

// Rota GET
router.get('/', (req, res) => {
    try {
        res.status(200).json(produtos);
    } catch (error) {
        res.status(404).send({ error: 'Erro ao listar produtos' });
    }
});

// Rota GET 
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (produto) {
        res.status(200).json(produto);
    } else {
        res.status(404).send({ error: 'Produto não encontrado!' });
    }
});

// Rota POST 
router.post('/', (req, res) => {
    console.log('Corpo da requisição:', req.body);  
    
    const { id, nome, preco } = req.body; 
    if (!id || !nome || !preco) {
        return res.status(404).send('Dados do produto inválidos');
    }

  
    produtos.push({ id, nome, preco });

    fs.writeFileSync('produtos.json', JSON.stringify(produtos, null, 2));

    res.status(201).send({ id, nome, preco });
});

// Rota PUT 
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, preco } = req.body;
    const produtoIndex = produtos.findIndex(p => p.id === id);

    if (produtoIndex === -1) {
        return res.status(404).send({ error: 'Produto não encontrado!' });
    }

 
    if (nome) produtos[produtoIndex].nome = nome;
    if (preco) produtos[produtoIndex].preco = parseFloat(preco);

 
    fs.writeFileSync('produtos.json', JSON.stringify(produtos, null, 2));

    res.status(200).json(produtos[produtoIndex]);
});

// Rota DELETE 
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produtoIndex = produtos.findIndex(p => p.id === id);

    if (produtoIndex === -1) {
        return res.status(404).send({ error: 'Produto não encontrado!' });
    }

   
    produtos.splice(produtoIndex, 1);

  
    fs.writeFileSync('produtos.json', JSON.stringify(produtos, null, 2));

    res.status(200).send({ message: 'Produto excluído com sucesso!' });
});

module.exports = router;
