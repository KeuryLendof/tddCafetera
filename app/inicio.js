let login = document.getElementById("login"),
    orden = document.getElementById("terminarOrden"),

    pedirCafePequeno = document.getElementById("pedirCafePequeno"),
    pedirCafeMediano = document.getElementById("pedirCafeMediano"),
    pedirCafeGrande = document.getElementById("pedirCafeGrande"),

    unaAzucar = document.getElementById("pedirAzucar1"),
    dosAzucar = document.getElementById("pedirAzucar2"),

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
    if(cafe>0){
        if(vasoPequeno>0){
            cafe -= 1
            localStorage.setItem("cafe", cafe)
            vasoPequeno -= 1
            localStorage.setItem("vasoPequeno", vasoPequeno)
        }else{
            swal ( "Oops" ,  "No hay vasos de cafe pequenos!" ,  "error" )
        }
    }else{
        swal ( "Oops" ,  "No hay cafe" ,  "error" )
    }
})

pedirCafeMediano.addEventListener('click',()=>{
    if(cafe>0){
        if(vasoMediano>0){
            cafe -= 1
            localStorage.setItem("cafe", cafe)
            vasoMediano -= 1
            localStorage.setItem("vasoMediano", vasoMediano)
        }else{
            swal ( "Oops" ,  "No hay vasos de cafe medianos!" ,  "error" )
        }
    }else{
        swal ( "Oops" ,  "No hay cafe" ,  "error" )
    }
})

pedirCafeGrande.addEventListener('click',()=>{
    if(cafe>0){
        if(vasoGrande>0){
            cafe -= 1
            localStorage.setItem("cafe", cafe)
            vasoGrande -= 1
            localStorage.setItem("vasoGrande", vasoGrande)
        }else{
            swal ( "Oops" ,  "No hay vasos de cafe grandes!" ,  "error" )
        }
    }else{
        swal ( "Oops" ,  "No hay cafe" ,  "error" )
    }
})

unaAzucar.addEventListener('click',()=>{
    if(azucar>0){
        azucar -= 1
        localStorage.setItem("azucar", azucar)
    }else{
        swal ( "Oops" ,  "No hay azucar" ,  "error" )
    }
})

dosAzucar.addEventListener('click',()=>{
    if(azucar>=2){
        azucar -= 2
        localStorage.setItem("azucar", azucar)
    }else{
        swal ( "Oops" ,  "No hay para dos cucharadas de azucar" ,  "error" )
    }
})