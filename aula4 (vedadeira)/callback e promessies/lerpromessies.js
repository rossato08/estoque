const fs =require('fs').promises;

fs.readFile('arquivo.txt','utf8')
.then(data => {
    console.log('Conteúdo do arquivo:',data);
})

.catch(err => {
    console.error('Erro ao ler o arquivo', err);
});

console.log('esta linha sera executad antes da leitura do arquivo1')