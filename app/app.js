let incrementarBtn = document.getElementById("aumentar"),
    disminuirBtn = document.getElementById("disminuir"),
    counterBtn = document.getElementById("counter");

let contador = 0

incrementarBtn.addEventListener("click",()=>{
    contador += 1
    counterBtn.innerHTML = contador
})

disminuirBtn.addEventListener("click",()=>{
    contador -= 1
    counterBtn.innerHTML = contador
})