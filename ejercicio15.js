/*2. Print a table containing multiplication tables
Let's start with the tables that many of us had to memorize in school. Can you print a table that contains all the answers to the multiplication tables from 1 through 10?

Like Challenge #1, can you create an efficient solution that you could easily expand should you need the 12 times table?*/

const multiplicationTable = () =>{
    let multiplicationNumbers=[0,1,2,3,4,5,6,7,8,9,10];
    for (i=0; i<=multiplicationNumbers; i++){
        console.table(i*multiplicationNumbers)
    }
} 
multiplicationTable();