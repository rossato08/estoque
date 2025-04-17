const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log('Dados recebidos:', response.data);
    })
    .catch(error => {
        console.log('Ocorreu um erro:', error)
    });