const todayDate = new Date();
let login = document.getElementById("login"),
    orden = document.getElementById("terminarOrden"),

    pedirCafePequeno = document.getElementById("pedirCafePequeno"),
    pedirCafeMediano = document.getElementById("pedirCafeMediano"),
    pedirCafeGrande = document.getElementById("pedirCafeGrande"),

    unaAzucar = document.getElementById("pedirAzucar1"),
    dosAzucar = document.getElementById("pedirAzucar2"),
    tresAzucar = document.getElementById("pedirAzucar3"),
    cuatroAzucar = document.getElementById("pedirAzucar4"),
    cincoAzucar = document.getElementById("pedirAzucar5"),

    cancelarOrden = document.getElementById('cancelarOrden'),

    cafe = localStorage.getItem("cafe"),
    azucar = localStorage.getItem("azucar"),
    vasoPequeno = localStorage.getItem("vasoPequeno"),
    vasoMediano = localStorage.getItem("vasoMediano"),
    vasoGrande = localStorage.getItem("vasoGrande"),

    historialCafe = '',
    historialAzucar = '',
    historialFecha = '';

    //historial = [];



function addHistorial(phistorialCafe, phistorialAzucar, phistorialFecha ){

    let newHistorial = JSON.parse(localStorage.getItem("historial"));
    newHistorial.push({
        Cafe : phistorialCafe,
        Azucar : phistorialAzucar,
        Fecha : phistorialFecha
    })
    //historial.push(newHistorial);
    //localStorageHistorial(historial)
    localStorage.setItem('historial', JSON.stringify(newHistorial));
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
    mostrarBotonCancelar();
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
    mostrarBotonCancelar();
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
    mostrarBotonCancelar();
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

tresAzucar.addEventListener('click',()=>{
    historialAzucar = '3'
    if(azucar>=3){
        azucar -= 3
        localStorage.setItem("azucar", azucar)
    }else{
        swal ( "Oops" ,  "Lo sentimos :( no hay para tres cucharadas de azucar" ,  "error" )
    }
})

cuatroAzucar.addEventListener('click',()=>{
    historialAzucar = '4'
    if(azucar>=4){
        azucar -= 4
        localStorage.setItem("azucar", azucar)
    }else{
        swal ( "Oops" ,  "Lo sentimos :( no hay para cuatro cucharadas de azucar" ,  "error" )
    }
})

cincoAzucar.addEventListener('click',()=>{
    historialAzucar = '5'
    if(azucar>=5){
        azucar -= 5
        localStorage.setItem("azucar", azucar)
    }else{
        swal ( "Oops" ,  "Lo sentimos :( no hay para cinco cucharadas de azucar" ,  "error" )
    }
})

orden.addEventListener("click",()=>{

    historialFecha = todayDate.toLocaleString();

    addHistorial(historialCafe, historialAzucar, historialFecha);

    document.getElementById('cantidadCafeM').innerHTML = historialCafe;
    document.getElementById('cantidadAzucarM').innerHTML = historialAzucar;

    cancelarOrden.style.display = 'none';

    // let historialCafe = '5 Oz';
    // let historialAzucar = '1';
    // let historialFecha = '11/04/22';

    // let data =[
    //     {
    //         'Cafe': '7 Oz',
    //         'Azucar': '2',
    //         'Fecha': '12/4/2022, 0:00:07'
    //     },
    //     {
    //         "Cafe": "3 Oz",
    //         "Azucar": "1",
    //         "Fecha": "12/4/2022, 0:00:27"
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

cancelarOrden.addEventListener('click',()=>{
    swal("Orden Cancelada!", "", "success");
    cancelarOrden.style.display = 'none';
    if(cafe>0){
        cafe += 1
        localStorage.setItem("cafe", cafe)
    }
    if(historialCafe == '3 Oz'){
        vasoPequeno += 1
        localStorage.setItem("vasoPequeno", vasoPequeno)
    }
    if(historialCafe == '5 Oz'){
        vasoMediano += 1
        localStorage.setItem("vasoMediano", vasoMediano)
    }
    if(historialCafe == '7 Oz'){
        vasoGrande += 1
        localStorage.setItem("vasoGrande", vasoGrande)
    }else{
        console.log("NULL")
    }

    
    if(historialAzucar = '1'){
        azucar += 1
        localStorage.setItem("azucar", azucar)
    }else if(historialAzucar = '2'){
        azucar += 2
        localStorage.setItem("azucar", azucar)
    }else if(historialAzucar = '3'){
        azucar += 3
        localStorage.setItem("azucar", azucar)
    }else if(historialAzucar = '4'){
        azucar += 4
        localStorage.setItem("azucar", azucar)
    }else if(historialAzucar = '5'){
        azucar += 5
        localStorage.setItem("azucar", azucar)
    }else{
        console.log("NULL")
    }

    
    
    
    
})

function mostrarBotonCancelar(){

    cancelarOrden.style.display = 'block';

    // if (x.style.display === 'none') {
    //     x.style.display = 'block';
    // } else {
    //     x.style.display = 'none';
    // }
}