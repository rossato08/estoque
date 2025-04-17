const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


fs.readFile('nomeaplicativo.json', 'utf8', (err, data) => {
    if (err) {
        console.log('Erro ao ler o arquivo: ', err);
        return;
    }

    try {
        const dados = JSON.parse(data);
       readline.question('digite um numero de 0 a 1 para acessar a informação desejada' , valor



dados.telefones.forEach(telefone =>{
    console.log(`telefone: ${telefone}`);

});


    } catch (error) {
        console.log('Erro ao analizar JSON', err);
    }

});