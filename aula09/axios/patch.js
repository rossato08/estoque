const axios = require('axios');

axios.patch('https://jsonplaceholder.typicode.com/todos/1', {
    
    title: "Comprar pão de queijo",
    
})
    .then(response => {
        console.log('ToDo atualizado: (parcial)', response.data);
    })
    .catch(error => {
        console.log('Ocorreu um erro:', error);
    });