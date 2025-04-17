try{
    let pessoa = undefined;
    console.timeLog("Nome: pessoa.nome")
} catch (error) {
    console.log("Ocorreu um erro:" , error.message)
} finally {
    console.log("fim do try/cat")
}