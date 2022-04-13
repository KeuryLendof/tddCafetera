let aumentarCafeBtn = document.getElementById("aumentarCafe"),
    disminuirCafeBtn = document.getElementById("disminuirCafe"),
    cafeBtn = document.getElementById("cantidadCafe"),

    aumentarAzucarBtn = document.getElementById("aumentarAzucar"),
    disminuirAzucarBtn = document.getElementById("disminuirAzucar"),
    azucarBtn = document.getElementById("cantidadAzucar"),

    aumentarVasoPBtn = document.getElementById("aumentarVasoP"),
    disminuirVasoPBtn = document.getElementById("disminuirVasoP"),
    vasoPBtn = document.getElementById("cantidadVasoP"),

    aumentarVasoMBtn = document.getElementById("aumentarVasoM"),
    disminuirVasoMBtn = document.getElementById("disminuirVasoM"),
    vasoMBtn = document.getElementById("cantidadVasoM"),

    aumentarVasoGBtn = document.getElementById("aumentarVasoG"),
    disminuirVasoGBtn = document.getElementById("disminuirVasoG"),
    vasoGBtn = document.getElementById("cantidadVasoG"),

    dialog = document.getElementById("dialog"),
    cerrar = document.getElementById("cerrar"),
    show = document.getElementById("abrirLogin");


let cafe = localStorage.getItem("cafe");
let azucar = localStorage.getItem("azucar");
let vasoPequeno = localStorage.getItem("vasoPequeno");
let vasoMediano = localStorage.getItem("vasoMediano");
let vasoGrande = localStorage.getItem("vasoGrande");

function cargar(){
    // localStorage.setItem("vasoPequeno", 10);
    // localStorage.setItem("vasoMediano", 10);
    // localStorage.setItem("vasoGrande", 10);
    document.getElementById('cantidadCafe').innerHTML = cafe;
    document.getElementById('cantidadAzucar').innerHTML = azucar;
    document.getElementById('cantidadVasoP').innerHTML = vasoPequeno;
    document.getElementById('cantidadVasoM').innerHTML = vasoMediano;
    document.getElementById('cantidadVasoG').innerHTML = vasoGrande;
    // if(cafe == 8){
    //     console.log("Todo funciona bien")
    // }else{
    //     console.log("perfecto")
    // }
}

aumentarCafeBtn.addEventListener("click",()=>{
    cafe /=1
    cafe += 1
    cafeBtn.innerHTML = cafe
    localStorage.setItem("cafe", cafe)
})

disminuirCafeBtn.addEventListener("click",()=>{
    cafe -= 1
    cafeBtn.innerHTML = cafe
    localStorage.setItem("cafe", cafe)
})

aumentarAzucarBtn.addEventListener("click",()=>{
    azucar /=1
    azucar += 1
    azucarBtn.innerHTML = azucar
    localStorage.setItem("azucar", azucar)
})

disminuirAzucarBtn.addEventListener("click",()=>{
    azucar -= 1
    azucarBtn.innerHTML = azucar
    localStorage.setItem("azucar", azucar)
})

aumentarVasoPBtn.addEventListener("click",()=>{
    vasoPequeno /=1
    vasoPequeno += 1
    vasoPBtn.innerHTML = vasoPequeno
    localStorage.setItem("vasoPequeno", vasoPequeno)
})

disminuirVasoPBtn.addEventListener("click",()=>{
    vasoPequeno -= 1
    vasoPBtn.innerHTML = vasoPequeno
    localStorage.setItem("vasoPequeno", vasoPequeno)
})

aumentarVasoMBtn.addEventListener("click",()=>{
    vasoMediano /=1
    vasoMediano += 1
    vasoMBtn.innerHTML =  vasoMediano
    localStorage.setItem("vasoMediano",  vasoMediano)
})

disminuirVasoMBtn.addEventListener("click",()=>{
    vasoMediano -= 1
    vasoMBtn.innerHTML =  vasoMediano
    localStorage.setItem("vasoMediano",  vasoMediano)
})

aumentarVasoGBtn.addEventListener("click",()=>{
    vasoGrande /=1
    vasoGrande += 1
    vasoGBtn.innerHTML =  vasoGrande
    localStorage.setItem("vasoGrande",  vasoGrande)
})

disminuirVasoGBtn.addEventListener("click",()=>{
    vasoGrande -= 1
    vasoGBtn.innerHTML =  vasoGrande
    localStorage.setItem("vasoGrande",  vasoGrande)
})

show.addEventListener('click', () => dialog.showModal())
cerrar.addEventListener('click', () => dialog.close())

function cerrarSesion(){
    window.location.href="./index.html";
}

function historialDeCompras(){
    window.location.href="./historial.html";
}

// localStorage.setItem("titulo", "Curso de Angular avanzado - Víctor Robles");

// localStorage.getItem("titulo");

// localStorage.removeItem("titulo");