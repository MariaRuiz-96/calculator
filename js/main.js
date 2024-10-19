let display = document.querySelector("#displayNumber")

let num8 = document.querySelector(".c8")

let llamar = num8.addEventListener("click", ()=>{
    let valor = num8.value

    return display.textContent = valor
})