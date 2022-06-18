/*1. Print all even numbers from 0 – 10
Try to make the solution to this problem as efficiently as possible. Consider using loops that would allow you to type the fewest characters/commands. While you could simply print the even numbers, get creative and see how you could output them in a way that would work up to 10 or even up to 10,000 with little extra effort.*/


const even = () => {
    let myNumber=parseInt(prompt("Tell me a number:"));

    if (myNumber !== typeof "number"){
        console.log("No ingresaste un número válido");
    } 

    for(i=0; i<=myNumber; i++){
        if(i % 2 == 0){
          console.log(`${i} es un número par`);
        }
      }
    
}

even();



