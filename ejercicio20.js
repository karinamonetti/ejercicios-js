// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const primo = num =>{
    if (typeof num !== "number"){
        alert("Debes ingresar un número válido")
    }

    for(i=2; i<num; i++){
        if(num%i===0){
            return console.log(`${num} no un número primo`)
        }else if(num%i!==0){
            return console.log(`${num} es un número primo`)
        }
    }
}
primo(7);
primo(6);
primo(12);
primo(13);

