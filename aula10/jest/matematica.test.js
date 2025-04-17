const {somar , dividir}  = require('./matematica');

//test Suite
describe("função Somar: " , () => {

    //test
    it('Deve somar dois numeros corretamente', () => {
        expect(somar(2, 3)).toBe(5);
    });

    //test
    it('Deve somar posotivos e negaivos corretamenete' , () =>{
        expect(somar(-2,3)).toBe(1);
    });

      //test
      it('Deve somar números negativo corretamente' , () =>{
        expect(somar(-2,-3)).toBe(-5);
    });

});

    describe("Função Dividir", () => {
        it('deve dividir dois numeros positivos corretamente' , () => {
            expect(dividir(10, 2 )).toBe(5)
        })
    })

