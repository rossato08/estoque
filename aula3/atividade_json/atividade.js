const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

fs.readFile('dados.json', 'utf8', (err, data) => {
    if (err) {
        console.log('Erro ao ler o arquivo: ', err);
        return;
    }

    try {
        const dados = JSON.parse(data);
        console.log('Dados lidos do arquivo: \n', dados);
        readline.question('Qual o seu nome?', nome => {
            dados.nome = nome;
            readline.question('Qual seu sobrenome?', sobrenome => {
                dados.sobrenome = sobrenome;
                readline.close();
                const jsonData = JSON.stringify(dados, null, 2);

                fs.writeFile('dados.json', jsonData, 'utf8', (err) => {
                    if (err) {
                        console.log('Erro ao reescrever arquivo: ', err);
                        return;
                    }

                    console.log('Dados gravados com sucesso no arquivo!');
                });
            });
        });
    } catch (err) {
        console.log('Erro ao analisar arquivo JSON: ', err);
    }
});

