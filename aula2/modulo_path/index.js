const path = require('path');

const caminhoCompleto = path.join(__dirname, 'arquivo.txt');
console.log(caminhoCompleto);

const nomeArquivo = path.basename(caminhoCompleto);
console.log(nomeArquivo);

const extensao = path.extname(caminhoCompleto);
console.log(extensao)