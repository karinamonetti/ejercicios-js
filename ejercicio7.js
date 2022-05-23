//      ***********    SEVENTH EXERCISE ***************
// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var database=[{username:"kari", password:"123"}]
var newsfeed=[{username:"karimonetti",timeline:"I'm learn JavaScript"},{username:"danielsantos",timeline:"La ratita santos"},{username:"kimbafashion",timeline:"Quiero carneee"}]



// 
//CONTRUYENDO UN FACEBOOK FACILITO (?)

var username=prompt("¿Cuál es tu usuario?: ");
var password=prompt("¿Cuál es tu contraseña?: ");

function logIn(user,pass){
    if(user===database[0].username && pass===database[0].password){
        console.log("Hola ",database[0].username,". Aquí están las noticias: ",newsfeed)
    }else{
        alert("No te conozco")
    }
}
logIn(username, password);