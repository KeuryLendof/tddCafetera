let login = document.getElementById("login"),
    orden = document.getElementById("terminarOrden");


login.addEventListener("click",()=>{
    let usuario = document.querySelector("#usuario").value;
    let contrasena = document.querySelector("#contrasena").value;

    if(usuario == "prueba"){
        if(contrasena == 12345){
            window.location.href="./inventario.html";
        }else{
            swal ( "Oops" ,  "La contrasena es: 12345!" ,  "error" )
        }
    }else{
        swal ( "Oops" ,  "El usuario es: prueba!" ,  "error" )
    }
})

orden.addEventListener("click",()=>{
    swal("Orden exitosa!", "", "success")
})