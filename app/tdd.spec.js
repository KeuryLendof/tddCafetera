//Comprobar si hay cafe en el inventario

const { it, expect } = require("@jest/globals")
const PedirCafe = require('./tdd');

describe('Pedir cafe', ()=>{

    const pedirCafe = new PedirCafe();

    it('Comprobar si hay cafe en el inventario',()=>{
        const resultado = pedirCafe.comprobarSiHayCafe(1);
        expect(resultado).toBe(2)
    });

    it('Comprobar si hay azucar en el inventario',()=>{
        const resultado = pedirCafe.comprobarSiHayAzucar(1);
        expect(resultado).toBe(2)
    });

    it('Comprobar vasos de 3 Oz',()=>{
        const resultado = pedirCafe.comprobarVazo3Oz(1);
        expect(resultado).toBe(2)
    });

    it('Comprobar vasos de 5 Oz',()=>{
        const resultado = pedirCafe.comprobarVazo5Oz(1);
        expect(resultado).toBe(2)
    });

    it('Comprobar vasos de 7 Oz',()=>{
        const resultado = pedirCafe.comprobarVazo7Oz(1);
        expect(resultado).toBe(2)
    });

});