//* Cambia el numero dependiendo del boton seleccionado

let display = document.querySelector("#displayNumber");

let numbers = document.querySelectorAll(".numbers");

let diplayNumber = numbers.forEach((number) => {
    number.addEventListener("click", ()=>{
        let value = number.value

        display.textContent = value
    })
});


