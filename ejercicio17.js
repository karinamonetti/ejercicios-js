// Primera tanda de ejercicios DEL CURSO DE JM 😎
// https://www.youtube.com/watch?v=3o5d-tdVscU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=35

//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const numeroDeCaracteres = () => {
    let palabra = prompt("Dime algo y yo te devolveré el número de caracteres que tiene:");
    return alert(`La cantidad de caracteres es de ${palabra.length}`)
}
numeroDeCaracteres();


// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const stringRecortado = () => {
    let dimeAlgo= prompt("Dime algo y yo te devolveré una parte de lo que me dijiste:");
    let algoRecortado= dimeAlgo.slice(0,7);
    return algoRecortado
}
stringRecortado();

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const stringEnUnArray = () =>{
    let dimeAlgunaCosa= prompt("Dime algo y yo lo convertiré en un Array");
    let dimeAlgunaCosaEnArray= dimeAlgunaCosa.split(" ");
    return dimeAlgunaCosaEnArray;
}
stringEnUnArray();


//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repetir = (text) => {
    return text.repeat(3);
}
repetir("Hola");