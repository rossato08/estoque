const  express =  require('express');
const app = express();
const port = 3000


app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/' , (req,res)=> {
    res.send('<h1>Página Inicial</h1>')
});

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Detalhes do usúario com ID: ${id}`);
});

app.get('/categorias/:categoria/produtos/:produtosId', (req, res) => {
    const categoria = req.params.categoria;
    const produtosId = req.params.produtosId;
    res.send(`Categoria: ${categoria} e produto: ${produtosId}`)
});

app.get("/categorias/:categoria" , (req,res) => {
    const categoria = req.params.categoria;
    res.send(`Categoria= ${categoria}`)
})

app.get("/produtos/:produtoId" , (req,res) => {
    const produtoId = req.params.produtoId;
    res.send(` Produto= ${produtoId}`)
})

app.post('/produtos', (req, res)=> {
    const novoProduto = req.body;
    console.log('Novo Produto', novoProduto );
    res.send('produto criado com sucesso')
})

app.options('/produtos/:id',(req, res)=> {
    res.header('Allow', 'GET, OPTIONS');
    res.status(204).send();
});



app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);
});