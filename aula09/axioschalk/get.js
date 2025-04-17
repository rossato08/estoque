import chalk from "chalk";
import axios from "axios";

axios.get('https://jsonplaceholder.typicode.com/todos/1')
 .then(Response =>{
    console.log(chalk.green.bgWhite("Dados recebidos com sucesso!!!"))
    console.log(Response.data);
 })
 .catch(error =>{
    console.log(chalk.red("Ocorreu um Erro  "));
    console.log(error.message);
 })