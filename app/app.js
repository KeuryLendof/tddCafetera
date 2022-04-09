let aumentarCafeBtn = document.getElementById("aumentarCafe"),
    disminuirCafeBtn = document.getElementById("disminuirCafe"),
    cafeBtn = document.getElementById("cantidadCafe"),

    aumentarAzucarBtn = document.getElementById("aumentarAzucar"),
    disminuirAzucarBtn = document.getElementById("disminuirAzucar"),
    azucarBtn = document.getElementById("cantidadAzucar");



let cafe = localStorage.getItem("cafe");
let azucar = localStorage.getItem("azucar");

function cargar(){
    //localStorage.setItem("azucar", 5);
    document.getElementById('cantidadCafe').innerHTML = cafe;
    document.getElementById('cantidadAzucar').innerHTML = azucar;
}

aumentarCafeBtn.addEventListener("click",()=>{
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
    azucar += 1
    azucarBtn.innerHTML = azucar
    localStorage.setItem("azucar", azucar)
})

disminuirAzucarBtn.addEventListener("click",()=>{
    azucar -= 1
    azucarBtn.innerHTML = azucar
    localStorage.setItem("azucar", azucar)
})


// localStorage.setItem("titulo", "Curso de Angular avanzado - Víctor Robles");

// localStorage.getItem("titulo");

// localStorage.removeItem("titulo");