const axios = require('axios');

axios.delete('https://jsonplaceholder.typicode.com/todos/1')
.then(Response => {
    console.log("Todo excluido com sucesso");
})
.catch(err => {
    console.error('Ocorreu um erro: ' ,error);
})