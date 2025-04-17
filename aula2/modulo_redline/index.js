const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Qual o seu nome?',nome => {
    console.log(`olá , ${nome}!`);
    readline.close();
});