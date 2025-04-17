const express = require('express');
const router = express.Router();

const autenticar = (req, res, next) =>{

    // Simulação de autenticacção : NUNCA USAR EM PRODUÇÃO
    const token = req.headers['authorization']
    if (token === '123'){
        next(); //se autrnticado
    } else{
        res.status(401).send('Acesso Negado/Não autorizado');
    }
}

router.get('/', autenticar, (req,res)=>{
    res.status(200).send('Página de Adiministração!')
});



module.exports = router