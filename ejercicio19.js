// Tercera tanda de ejercicios DEL CURSO DE JM 😎
// https://www.youtube.com/watch?v=U4buFGcd_eg&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=37


//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const aleatorio = () => { 
    return Math.floor(Math.random() * (601 - 500 + 1) + 500);
}
aleatorio();

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = num => {
    if (typeof num !== "number") {
        console.log(typeof num)
        return alert("Debes ingresar un número")
    } 

    let myString = String(num);
    let myNewString=myString.split("").reverse().join("")
    
    if (myString === myNewString){
        alert("Es un número capicua")
    }else{
        alert("No es capicua")
    }
}
capicua("hola")
capicua(5556);
capicua("NaN")
capicua(NaN);
capicua(333);


//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (num) => {
    alert("Calculo el factorial de un número igual o mayor a 1")
    if (num <= 0 || typeof num !== "number"){
        return alert("Debes ingresar un número válido")
    }

    let myFactorial=1;
    for (i=1; i<=num; i++){
       myFactorial=myFactorial*i
    }
    return `El factorial de ${num} es ${myFactorial}`
}
factorial(5);