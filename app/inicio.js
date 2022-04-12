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
    vasoGrande = localStorage.getItem("vasoGrande"),

    historial = [];



function addHistorial(phistorialCafe, phistorialAzucar, phistorialFecha ){

    let newHistorial ={
        historialCafe : phistorialCafe,
        historialAzucar : phistorialAzucar,
        historialFecha : phistorialFecha
    }
    historial.push(newHistorial);
    localStorage.setItem('historial', JSON.stringify(historial));
}

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


pedirCafePequeno.addEventListener('click',()=>{
    historialCafe = '3 Oz'
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
    historialCafe = '5 Oz'
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
    historialCafe = '7 Oz'
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
    historialAzucar = '1'
    if(azucar>0){
        azucar -= 1
        localStorage.setItem("azucar", azucar)
    }else{
        swal ( "Oops" ,  "No hay azucar" ,  "error" )
    }
})

dosAzucar.addEventListener('click',()=>{
    historialAzucar = '2'
    if(azucar>=2){
        azucar -= 2
        localStorage.setItem("azucar", azucar)
    }else{
        swal ( "Oops" ,  "No hay para dos cucharadas de azucar" ,  "error" )
    }
})

orden.addEventListener("click",()=>{
    swal("Orden exitosa!", "", "success")
    let historialCafe = '7 Oz',
        historialAzucar = '2',
        historialFecha = '11/04/22';
    addHistorial(historialCafe, historialAzucar, historialFecha);
    // let historialCafe = '5 Oz';
    // let historialAzucar = '1';
    // let historialFecha = '11/04/22';

    // let data =[
    //     {
    //         'Cantidad de cafe': '3 Oz',
    //         'Azucar': '1',
    //         'fecha': '11/11/11'
    //     },
    //     {
    //         'Cantidad de cafe': '7 Oz',
    //         'Azucar': '2',
    //         'fecha': '12/12/12'
    //     }
    // ]

    // localStorage.setItem('historial', JSON.stringify(data));

    //let prueba = JSON.parse(localStorage.getItem("datos"));
    // console.log(prueba[1])
    // console.log(prueba[0].estilo)
    // prueba.push({
    //     'Cantidad de cafe': historialCafe,
    //     'Azucar': historialAzucar,
    //     'fecha': historialFecha
    // })
    // localStorage.setItem('historial', JSON.stringify(prueba));
    //console.log(prueba)
})

// function localStorageHistorial(plist){
//     localStorage.setItem('historial', JSON.stringify(plist));
// }
