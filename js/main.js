//* Cambia el numero dependiendo del boton seleccionado

let firstNumber = ""
let secondNumber = ""
let isOperatorSelect = false //- nos ayuda para saber si ya fue seleccionado o no el operador

let display = document.querySelector("#displayNumber");
let numbers = document.querySelectorAll(".numbers");

let diplayNumber = numbers.forEach((number) => {
    number.addEventListener("click", ()=>{
        let value = number.value

        if(!isOperatorSelect){
            if(value === '.' && firstNumber.includes('.')){return}
            firstNumber += value;
            display.textContent = firstNumber;
        }else{
            if(value === '.' && secondNumber.includes('.')){return}
            secondNumber += value
            display.textContent = secondNumber;
        }
    })
});


//* Selecion de operador
let operator = "";

let operators = document.querySelectorAll(".operator");
let operatorsSelect = operators.forEach((op)=>{
    op.addEventListener("click", ()=>{
        if(firstNumber === "") return;
        operator = op.value 
        isOperatorSelect=true
    })
})

//* Uso de punto decimal
let decimalButton = document.querySelector(".cpoint");

decimalButton.addEventListener("click", () => {
    if (!isOperatorSelect){
        if(!firstNumber.includes(".")){
            firstNumber += ".";
            display.textContent = firstNumber
            
        }
    }else {
        if(!secondNumber.includes(".")){
            secondNumber += ".";
            display.textContent = secondNumber;
        }
    }
});



