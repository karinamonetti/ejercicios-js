// Segunda tanda de ejercicios DEL CURSO DE JM 😎
// https://www.youtube.com/watch?v=Xh8p7aZBiaw&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=36

//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const alReves= word=>console.log(word.split("").reverse().join(""));
alReves("Hola ¿cómo está?");

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const existe=()=>{
    let contador=0;
    let myString="Hola ¿cómo estás?. Ayer vi a Juanito, le dije hola y ni me escuchó. No voy a decirle hola nunca más";
    myString=myString.toLowerCase();
    let myArray=myString.split(" ");
    for (i=0; i<myArray.length; i++){
        if(myArray[i]==="hola"){
            contador++;
        }
    }
    console.log(`La palabra 'hola' se encuentra un total de ${contador} veces`)
}
existe()

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.


//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

