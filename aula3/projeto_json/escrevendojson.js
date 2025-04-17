const { Console } = require('console');
const fs = require('fs');

const dados = {
    nome: 'Rossato',
    idade: 17,
    cidade: 'São paulo'
};

const jsondata = JSON.stringify(dados, null, 2)
fs.writeFile('dados2.json' , jsondata, 'utf8' , (err)=>{
    if(err){
        Console.log('Erro ao escrever arquivo:' , err);
        return;
    }
    console.log('Dados gravados com sucesso !!!');
}
)