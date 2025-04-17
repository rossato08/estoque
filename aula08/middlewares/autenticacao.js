const express = require('express');
const app = express()
const port = 3000

const autenticar = (req, res, next) =>{

    // Simulação de autenticacção : NUNCA USAR EM PRODUÇÃO
    const token = req.headers['authorization']
    if (token === 'SEGREDO'){
        next(); //se autrnticado
    } else{
        res.status(401).send('Acesso Negado/Não autorizado');
    }
}

app.get('/admin', autenticar, (req,res)=>{
    res.status(200).send('Página de Adiministração!')
});

app.get('/', (req, res)=>{
    res.status(200).send('<h1>Página Inicial</h1>');
});

app.listen(port, () =>{
    console.log(`srvidor rodando em http://localhost${port}`);
});