const fs = require('fs')
const os = require('os')


    const info = `
plataforma: ${os.platform()},
arquitetura: ${os.arch()},
informações da CPU: ${os.cpus()},
diretorio do usuario: ${os.homedir()},
`


fs.writeFile('info_sistema.txt',info,err => {
    if (err) throw err;
    console.log('Arquivo Salvo!');
});KO