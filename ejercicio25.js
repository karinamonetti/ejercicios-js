//  Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

// [ ]

let vocales = 0;
let consonantes = 0;


const vocalesConsonantes = text => {

    if (typeof text === "number") {
        return console.log("Debes ingresar un texto");
    }
    
    text = text.toLowerCase();

    for (i=0; i<text.length;i++){

        if (text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u"){
            
            vocales = vocales + 1;

        } else if (text[i] === "b" || text[i] === "c" || text[i] === "d" || text[i] === "f" || text[i] === "g" || text[i] === "h" || text[i] === "j" || text[i] === "k" || text[i] === "l" || text[i] === "m" || text[i] === "n" || text[i] === "p" || text[i] === "q" || text[i] === "r" || text[i] === "s" || text[i] === "t" || text[i] === "v" || text[i] === "w" || text[i] === "x" || text[i] === "y" || text[i] === "z") {

            consonantes = consonantes + 1;

        }

    }

    console.log(`La cantidad de vocales es de ${vocales} y de consonantes de ${consonantes}`)
}

vocalesConsonantes("hola todo bien?");