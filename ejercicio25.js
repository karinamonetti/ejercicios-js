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

        if ( /[aeiouüáéíóú]/.test(text[i]) ) {

            vocales++;
        }

        if ( /[bcdfghjklmnñpqrstvwxyz]/.test(text[i]) ) {

            consonantes++;

        }

    }

    console.log(`La cantidad de vocales es de ${vocales} y de consonantes de ${consonantes}`)
}

vocalesConsonantes("karina anahí");