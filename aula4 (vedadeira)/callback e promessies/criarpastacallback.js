const fs = require ('fs');

    fs.mkdir('pastaNova' , {recursive: true}, err=>{
        if (err) throw err;
        console.log('Pasta Criada!!!')
    })