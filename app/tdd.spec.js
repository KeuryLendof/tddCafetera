//Comprobar si hay cafe en el inventario

const { it, expect } = require("@jest/globals")
const PedirCafe = require('./tdd');

describe('Pedir cafe', ()=>{

    const pedirCafe = new PedirCafe();

    it('Comprobar si hay cafe en el inventario',()=>{
        const resultado = pedirCafe.comprobarSiHayCafe(1);
        expect(resultado).toBe(2)
    });

});