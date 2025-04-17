const axios = require('axios');

axios.post('https://jsonplaceholder.typicode.com/todos',{
    userId: 1 ,
    title: "Coprar pão",
    completed: false
})
.then(Response=>{
    console.log('Novo Todo criado:' , Response.data);
})
.catch(error =>{
    console.log('Ocorreu um Erro' , error);
})