// Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.


const validEmail = email => {

    if ( !email || typeof email !== "string" ) {

        console.log("Ingresa un correo electrónico válido");

    }

    if ( /^[A-Z0-9._]+@[A-Z0-9.]+\.[A-Z]{2,4}$/ig.test(email) ) {

        console.log("El usuario ha ingresado un correo electrónico válido.");

    } else {

        console.log("Ingresa un correo electrónico válido");

    }
}


validEmail(" ");
validEmail("algo@algo.com");
validEmail("algo333@algo.com");
validEmail("algo_211@algo.com");
validEmail("algo.dev@algo.com");
validEmail("algo%aaaa@algo.com");
validEmail("algo-aaaa@algo.com");
validEmail("algo");