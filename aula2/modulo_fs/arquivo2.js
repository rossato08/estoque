

/* ------------------------------ cria arquivo ------------------------------ */


// const fs = require('fs');

// const conteudo ='Este é o conteúdo do arquivo.';

// fs.writeFileSync('arquivo2.txt',conteudo,err => {
 //   if (err) throw err;
  //  console.log('Arquivo Salvo!');
// });





/* ------------------------------- ler arquivo ------------------------------ */



//fs.readFile('arquivo2.txt', 'utf8' , (err, data) => {
   // if (err) throw err;
  //  console.log(data);
//});





/* ----------------------------- editar arquivo ----------------------------- */


const fs = require('fs');

const linha ='\nNovalinha';

fs.appendFile('arquivo2.txt',linha, err =>{
  if (err) throw err;
  console.log('Informação Adicionada!');
});