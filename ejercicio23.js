// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const conDescuento = (monto,descuento) => {
    console.log(`Esta función te permite obtener el descuento de un monto. Ingresa primero el monto y luego el descuento`);

    if(typeof monto !== "number" || typeof descuento !== "number"){
        console.log(`Debes ingresar cantidades numéricas`);
    }
    
    let elDescuento= descuento * 0.01;
    let resultado= monto - (monto * elDescuento);

    console.log(`El monto que deberás pagar si le aplico un descuento del ${descuento}% es de ${resultado} pesos`);
}


conDescuento(100,2);
conDescuento(5432,8);