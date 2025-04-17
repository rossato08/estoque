const buscarDados = require('./funcaoassincrona');

describe('Função Buscar Dados', ()=>{
    
it('Deve retornar os dados corretamente' , () => {
    return buscarDados()
    .then(data=> {
        expect(data).toBeDefined();
        expect(data.userId).toBe(1)
    })
})

})