// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const par = num =>{
    if (num%2===0){
        console.log(`${num} es par`)
    } else{
        console.log(`${num} es impar`)
    }
}

par(2);
par(5);
par(16);