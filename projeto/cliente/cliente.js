import chalk from "chalk";
import axios from "axios";
import inquirer from "inquirer";


const API_URL = 'http://localhost:3000'

async function listarProdutos() {
    try {
const response = await axios.get(`${API_URL}/produtos`);
return response.data
    } catch(error) {
        console.error(chalk.red('Erro ao listar produtos:'), error.message);
    }
}


async function exibirDetalhesProduto(id){
    try{
        const response = await axios.get(`${API_URL}/produtos/${id}`)
        return response.data;
    } catch (error) {
        console.error(chalk.red(`Erro ao exibir os detalhe do produto com o ID: ${id}`) , error.message);
        return null;
    }
}


async function exibirMenu() {
console.log('\n ')



/* -------------------------------- perguntas ------------------------------- */
    const perguntas = [
        {
            type: 'list' ,
            name: 'opcao',
            message: chalk.yellow('Escolha uma opção'),
            choices: [
                {name: chalk.green('Listar Produtos'), value: 'listar'},
                {mame: chalk.green('Exibir detalhes do produto'), value: 'exibir'},
                {name: chalk.blue('Adicionar Produtos'), value: 'adicionar'},
                {name: chalk.yellow('Editar Produto'), value: 'editar'},
                {name: chalk.red('Excluir Produto'), value: 'excluir'},
                {name: chalk.white('Sair'), value: 'sair'},

            ]
        }
    ];



    /* --------------------------------- listar --------------------------------- */
try {
    const resposta = await inquirer.prompt(perguntas);

    switch (resposta.opcao) {
        case 'listar':
            const produtos = await listarProdutos();
            
        if(Array.isArray(produtos) && produtos.length > 0){
             console.log(chalk.green('Lista de produtos: '))
            produtos.forEach(produto => {
                console.log(`- ${chalk.cyan(produto.id)} : ${chalk.green(produto.nome)} - R$ ${chalk.yellow(produto.preco)}`)
            });

        } else   {
            console.log(chalk.yellow('Nenhum produto encontrado'));

        }

            exibirMenu()
            break;

/* --------------------------------- exibir --------------------------------- */

            case 'exibir':
                const idResposta = await inquirer.prompt([
                 {
                     type:'input',
                     name: 'id',
                     message:chalk.blue('digite o Id do produto')
                  }
               ]);
                
               const produto = await exibirDetalhesProduto(idResposta.id);
               
            if(produto){
                console.log(chalk.green('Detalhes do produto: '));
                console.log(`- ${chalk.cyan(produto.id)} : ${chalk.green(produto.nome)} - R$ ${chalk.yellow(produto.preco)}`)

            }else {
                console.log(chalk.yellow('Produto não encontrado!'));
            }

            exibirMenu()
            break;

            /* -------------------------------- adicionar ------------------------------- */

            case 'adicionar':
                await inquirer.prompt([
                    {   
                        type:'input',
                        name: 'senha',
                        message:chalk.blue('digite a senha do admin para continuar')
                     }
                  ]);

                  if(senha = 123 ) {
                    console.log (chalk.green("Produto Adicionado com Sucesso"))
                  } else{
                    console.log (chalk.red("Erro ao adicinar produto"))
                  }
              
            

                  // fazer a parte de adicionar dentro do json e exigindo a senha do admin para qualquer coisa 
                  

                  exibirMenu()
                  break;

              

    /* ----------------------------- editar produto ----------------------------- */



    case 'editar':
        await inquirer.prompt([
            {
                type:'input',
                name: 'senha',
                message:chalk.blue('digite a senha do admin para continuar')
             }
          ]);

          if(senha= 123 ) {
            console.log (chalk.green("Produto editado com sucesso"))
          } else{
            console.log (chalk.red("Erro ao editar produto"))
          }
      
    

          // fazer a parte de adicionar dentro do json e exigindo a senha do admin para qualquer coisa 
          

          exibirMenu()
          break;







    /* ----------------------------- excluir produto ---------------------------- */



          
    case 'excluir ':
         await inquirer.prompt([
            {
                type:'input',
                name: 'senha',
                message:chalk.blue('digite a senha do admin para continuar')
             }
          ]);

          if(senha = 123 ) {
            console.log (chalk.green("Produto excluido com Sucesso"))
          } else{
            console.log (chalk.red("Erro ao Excluir produto"))
          }
      
    

          // fazer a parte de excluir dentro do json e exigindo a senha do admin para qualquer coisa 
          

          exibirMenu()
          break;

    
    /* ---------------------------------- sair ---------------------------------- */





               

               case 'sair':
                console.log(chalk.blue('Saindo do sistema...'));
                break;
                 
             }





} catch (error) {
    console.error(chalk.red('Ocorreu um erro inesperado'), error);
}

}

exibirMenu();