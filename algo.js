// CALCULADORA

let firstNumber= parseInt(prompt("Dime un número:"));
let secondNumber= parseInt(prompt("Dime otro número:"));
let operation= prompt("¿Qué operación deseas realizar? Ingresa + para sumar, * para multiplicar, - para restar y / para dividir. Este programa no tomará en cuentra otras operaciones o valores ingresados.");

if (operation && operation!==" "){
    if(operation==="+"){
        alert(`El resultado de la operación es ${firstNumber+secondNumber}`);
    }else if (operation==="-"){
        alert(`El resultado de la operación es ${firstNumber-secondNumber}`);
    }else if (operation==="*"){
        alert(`El resultado de la operación es ${firstNumber*secondNumber}`);
    }else if (operation==="/"){
        alert(`El resultado de la operación es ${firstNumber/secondNumber}`);
    } else{
        alert("Ingresa una operación válida.");
    }
}else {
    alert("Ingresa una operación válida.");
};

