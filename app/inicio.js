let login = document.getElementById("login"),
    orden = document.getElementById("terminarOrden"),

    pedirCafePequeno = document.getElementById("pedirCafePequeno"),
    pedirCafeMediano = document.getElementById("pedirCafeMediano"),
    pedirCafeGrande = document.getElementById("pedirCafeGrande"),

    cafe = localStorage.getItem("cafe"),
    azucar = localStorage.getItem("azucar"),
    vasoPequeno = localStorage.getItem("vasoPequeno"),
    vasoMediano = localStorage.getItem("vasoMediano"),
    vasoGrande = localStorage.getItem("vasoGrande");


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

pedirCafePequeno.addEventListener('click',()=>{

})

pedirCafeMediano.addEventListener('click',()=>{
    
})

pedirCafeGrande.addEventListener('click',()=>{
    
})