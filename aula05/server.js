const { log } = require('console');
const http = require('http');

const server = http.createServer((req, res) => {
    const { method, url } = req;

    const produtos = [
        { id: 1, nome: 'Produto A', preço: 10.00 },
        { id: 2, nome: 'Produto B', preço: 20.00 },
        { id: 3, nome: 'Produto C', preço: 30.00 }
    ];


    console, log(`Requisição recebida: ${method} ${url}`);

    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end('<h1> Página inicial</h1>')
    } else if (url === '/produtos' && method === 'GET') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(produtos));
    } else if (url.startsWith('/produtos/') && method === 'GET') {

        const id = parseInt(url.split('/')[2]);

        const produto = produtos.find(p => p.id === id);


        if (produto) {
            res.writeHead(200, { 'content-type': 'application/json' });
            res.end(JSON.stringify(produto));
        } else {
            res.writeHead(404, { 'content-type': 'text/plain' });
            res.end('Produto não encontrado!!!');
        }

    } else if (url === '/contato' && method === "POST") {

        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });




        req.on('end', () => {
            console.log('Dados recebidos', body)
            res.writeHead(201, { 'content-type': 'text/plain' });
            res.end('dados reebidos com sucesso!!!')
        })

    }

});

const port = 3000;

server.listen(port, () => {
    console, log(`Servidor rodando em http://localhost:${port}`);

})