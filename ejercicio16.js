/*
Escribir un programa que muestre en pantalla los números del 1 al 100, 
sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por “buzz” y 
los múltiplos de ambos, 
es decir, los múltiplos de 3 y 5 (o de 15), por la palabra “fizzbuzz”.
*/
let numero=1;
for(i=1;i<=100;i++){
	if(i%3===0 && i%5===0){
		numero="FizzBuzz";
		console.log(numero)
	}else if(i%3===0){
		numero="Fizz";
		console.log(numero)
	}else if(i%5===0){
		numero="Buzz";
		console.log(numero);
	}else{
		console.log(i);
	}
}