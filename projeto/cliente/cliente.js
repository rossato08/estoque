import chalk from "chalk";
import axios from "axios";
import inquirer from "inquirer";

const API_URL = 'http://localhost:3000';

// Função para listar os produtos
async function listarProdutos() {
    try {
        const response = await axios.get(`${API_URL}/produtos`);
        return response.data;
    } catch (error) {
        console.error(chalk.red('Erro ao listar produtos:'), error.message);
    }
}

// Função para exibir detalhes de um produto
async function exibirDetalhesProduto(id) {
    try {
        const response = await axios.get(`${API_URL}/produtos/${id}`);
        return response.data;
    } catch (error) {
        console.error(chalk.red(`Erro ao buscar produto com ID ${id}`), error.message);
        return null;
    }
}

// Função para verificar senha
async function autenticar() {
    const resposta = await inquirer.prompt([
        {
            type: 'password',
            name: 'senha',
            message: chalk.blue('Digite a senha de administrador:')
        }
    ]);
    return resposta.senha === '123';
}

// MENU PRINCIPAL
async function exibirMenu() {
    const resposta = await inquirer.prompt([
        {
            type: 'list',
            name: 'opcao',
            message: chalk.yellow('Escolha uma opção:'),
            choices: [
                { name: chalk.green('Listar Produtos'), value: 'listar' },
                { name: chalk.greenBright('Exibir Detalhes do Produto'), value: 'detalhes' },
                { name: chalk.blue('Adicionar Produto'), value: 'adicionar' },
                { name: chalk.yellow('Editar Produto'), value: 'editar' },
                { name: chalk.red('Excluir Produto'), value: 'excluir' },
                { name: chalk.white('Sair'), value: 'sair' }
            ]
        }
    ]);

    switch (resposta.opcao) {

        // LISTAR PRODUTOS
        case 'listar':
            const produtos = await listarProdutos();
            if (Array.isArray(produtos) && produtos.length > 0) {
                console.log(chalk.green('\nLista de produtos:'));
                produtos.forEach(p => {
                    console.log(`- ${chalk.cyan(p.id)}: ${chalk.green(p.nome)} - R$ ${chalk.yellow(p.preco)}`);
                });
            } else {
                console.log(chalk.red('Nenhum produto encontrado.'));
            }
            return exibirMenu();

        // EXIBIR DETALHES
        case 'detalhes':
            const { id } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'id',
                    message: 'Digite o ID do produto:'
                }
            ]);
            const produto = await exibirDetalhesProduto(id);
            if (produto) {
                console.log(chalk.green('\nDetalhes do produto:'));
                console.log(`${chalk.cyan(produto.id)}: ${chalk.green(produto.nome)} - R$ ${chalk.yellow(produto.preco)}`);
            } else {
                console.log(chalk.red('Produto não encontrado.'));
            }
            return exibirMenu();

        // ADICIONAR PRODUTO
        case 'adicionar':
    const novaSenha = await inquirer.prompt([
        {
            type: 'password',
            name: 'senha',
            message: chalk.blue('Digite a senha do admin para continuar')
        }
    ]);

    if (novaSenha.senha === '123') {
        const novoProduto = await inquirer.prompt([
            { type: 'input', name: 'id', message: 'ID do novo produto:' },
            { type: 'input', name: 'nome', message: 'Nome do produto:' },
            { type: 'input', name: 'preco', message: 'Preço do produto:' }
        ]);

        // Converterndo para os tipo certos para dar certo na hora excluir 
        const produtoCorrigido = {
            id: Number(novoProduto.id),
            nome: novoProduto.nome,
            preco: parseFloat(novoProduto.preco)
        };

        try {
            await axios.post(`${API_URL}/produtos`, produtoCorrigido, {
                headers: { Authorization: '123' }
            });
            console.log(chalk.green('Produto adicionado com sucesso!'));
        } catch (error) {
            console.error(chalk.red('Erro ao adicionar o produto:'), error.message);
        }
    } else {
        console.log(chalk.red('Senha incorreta! Ação não autorizada.'));
    }

    exibirMenu();
    break

        // EDITAR PRODUTO
        case 'editar':
            if (!(await autenticar())) {
                console.log(chalk.red('Senha incorreta. Acesso negado.'));
                return exibirMenu();
            }

            const dadosEditar = await inquirer.prompt([
                { type: 'input', name: 'id', message: 'ID do produto a editar:' },
                { type: 'input', name: 'nome', message: 'Novo nome:' },
                { type: 'input', name: 'preco', message: 'Novo preço:' }
            ]);

            try {
                await axios.put(`${API_URL}/produtos/${dadosEditar.id}`, {
                    nome: dadosEditar.nome,
                    preco: dadosEditar.preco
                }, {
                    headers: { Authorization: '123' }
                });
                console.log(chalk.green('Produto editado com sucesso!'));
            } catch (error) {
                console.error(chalk.red('Erro ao editar produto:'), error.message);
            }
            return exibirMenu();

        // EXCLUIR PRODUTO
        case 'excluir':
            if ((await autenticar())) {
                console.log(chalk.red('Senha incorreta. Acesso negado.'));
                return exibirMenu();
            }

            const { idExcluir } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'idExcluir',
                    message: 'Digite o ID do produto a excluir:'
                }
            ]);

            try {
                await axios.delete(`${API_URL}/produtos/${idExcluir}`, {
                    headers: { Authorization: '123' }
                });
                console.log(chalk.green('Produto excluído com sucesso!'));
            } catch (error) {
                console.error(chalk.red('Erro ao excluir produto:'), error.message);
            }
            return exibirMenu();

        // SAIR
        case 'sair':
            console.log(chalk.blue('Encerrando o sistema. Até mais!'));
            break;
    }
}

exibirMenu();
