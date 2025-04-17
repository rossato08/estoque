const axios = require('axios');

axios.put('https://jsonplaceholder.typicode.com/todos/1', {
    user_id: 1,
    title: "Comprar pão de queijo",
    completed: true
})
    .then(response => {
        console.log('ToDo atualizado:', response.data);
    })
    .catch(error => {
        console.log('Ocorreu um erro:', error);
    });