const Data = require('./conexion');
 
class PedirCafe{

    
    comprobarSiHayCafe(comprobar){

        const data = new Data;
        const verificar = data.verificarCafe(1)
 
        
        if(verificar>0){
            return comprobar = true;
        }else{
            return comprobar = false;
        }
    }

    comprobarSiHayAzucar(comprobar){

        const data = new Data;
        const verificar = data.verificarAzucar(1)
 
        
        if(verificar>0){
            return comprobar = true;
        }else{
            return comprobar = false;
        }
    }

    comprobarVazo3Oz(comprobar){

        const data = new Data;
        const verificar = data.verificarVasos(1)
 
        
        if(verificar>0){
            return comprobar = true;
        }else{
            return comprobar = false;
        }
    }

    comprobarVazo5Oz(comprobar){

        const data = new Data;
        const verificar = data.verificarVasos(1)
 
        
        if(verificar>0){
            return comprobar = true;
        }else{
            return comprobar = false;
        }
    }

    comprobarVazo7Oz(comprobar){

        const data = new Data;
        const verificar = data.verificarVasos(1)
 
        
        if(verificar>0){
            return comprobar = true;
        }else{
            return comprobar = false;
        }
    }
}
module.exports = PedirCafe;