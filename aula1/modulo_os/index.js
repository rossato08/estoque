const os = require('os');
console.log(`plataforma: ${os.platform()}`); //ex: plataforma:win32
console.log(`arquitetura:${os.arch()}`); //ex:ARQUITTURA: x64
console.log('informações da CPU' , os.cpus());
console.log('diretório do usúario' , os.homedir());
console.log('sistema operacional' , os.type());
console.log('versão do sistema' , os.version());
console.log('interface de rede' , os.networkInterfaces());
