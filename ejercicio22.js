// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.


const temperatura = (grados,tipo) => {
    console.log(`Esta función convierte grados Fahrenheit a Celsius y viceversa. Ingresa primero los grados y después indica a qué lo quieres convertir, siendo C para Celsius y F para Fahrenheit`);
    let farenheit= (grados-32)/1.8; // FARENHEIT A CELSIUS
    let celsius= (grados*1.8)+32; // CELSIUS A FARENHEIT

    if(typeof grados !== "number"){
        return console.log(`Debes ingresar un número válido`);
    }

    
    if (typeof tipo !== "string"){
       return console.log(`Debes ingresar un formato de grados válido. C o F`);
    }else{
        tipo=tipo.toLowerCase();
    }




    if (tipo === "f"){
        console.log(`${grados} farenheit equivale a ${farenheit} grados celsius`)
    } else if (tipo === "c"){
        console.log(`${grados} grados celsius equivalen a ${celsius} grados farenheit`)
    }
    
}

temperatura(55,"F");