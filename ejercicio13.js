/* Dado un array de string, determinar si todas las palabras tiene 4 caracteres o mas. */

let array = ["hola", "chau", "que se yo", "basta", "salchicha", "no"]

for (i=0; i<array.length;i++){
    if(array[i].length<4){
        console.log("Existen elementos de menos de 4 caracteres")
    }
}