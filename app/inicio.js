let login = document.getElementById("login");


login.addEventListener("click",()=>{
    let usuario = document.querySelector("#usuario").value;
    let contrasena = document.querySelector("#contrasena").value;

    if(usuario == "prueba"){
        if(contrasena == 12345){
            console.log("login correcto")
        }else{
            console.log("contrasena incorrecta")
        }
    }else{
        console.log("incorrecto")
        console.log(usuario)
        console.log(contrasena)
    }
})