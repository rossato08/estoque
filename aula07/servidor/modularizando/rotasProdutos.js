const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('Lista de produtos');
});

router.get('/:categoria',(req, res)=>{
    const categoria = req.params.categoria;
    res.send(`detalhes do produto da categoria: ${categoria}`);
});


app.post('/produtos', (req, res)=> {
    const novoProduto = req.body;
    console.log('Novo Produto', novoProduto );
    res.send('produto criado com sucesso')
})


router.options('/', (req,res) =>{
    res.header('Allow', 'GET , OPTIONS');
    res.status(204).send();
});

module.exports = router