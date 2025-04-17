const fs = require('fs');

fs.readFile('dados.json', 'utf8', (err, data) => {
    if (err) {
        console.log('Erro ao ler o arquivo: ', err);
        return;
    }

    try {
        const dados = JSON.parse(data);
       

dados.produtos.forEach(produto =>{
    console.log(`nome:${produto.nome} \n preço:${produto.preco} \n descrição:${produto.descriçao} \n categoria:${produto.categoria}  \n -------------------`) ;

});


    } catch (error) {
        console.log('Erro ao analizar JSON', err);
    }

});