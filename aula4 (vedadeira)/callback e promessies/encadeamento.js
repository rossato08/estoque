const fs = require('fs').promises;

fs.readFile('arquivo.txt', 'utf8',)
    .then(data => {
        console.log('Conteúdo do arquivo: ', data);
        return data.toUpperCase();
    })
    .then(dataMaiusculas => {
        console.log('Conteúdo em maiúsculas: ', dataMaiusculas);
    })
    .catch(err => {
        console.error('Erro ao ler aquivo: ', err);
    });

