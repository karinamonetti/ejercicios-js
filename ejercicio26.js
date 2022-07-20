// Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

//    /^[a-zA-Z'- ]+$/ 



const isAName = name => {

    if ( typeof name !== "string" || !name) {

        return console.log( "No ingresaste un nombre válido." )
    }

    if ( /^[a-zA-ZÑñáÁéÉíÍóÓúÚüÜ\s]+$/g.test(name) ) {

        console.log("Es un nombre válido");

    } else {

        console.log("No es un nombre válido")

    }

    

    

}

isAName(2345);
isAName("Karina Anahí Monetti")