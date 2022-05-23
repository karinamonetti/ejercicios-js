// EJERCICIO 8 
// CONSTRUIR UN FACEBOOK CON LOOPS

// FACEBOOK SENCILLITO PERO MEJORADO
var myUser=prompt("Decime tu usuario: ");
var myPass=prompt("Decime tu contraseña: ");

var database=[
    {
        username:"kari",
        password:"123"
    },
    {
        username:"dani",
        password:"123"
    },
    {
        username:"kimba",
        password:"123"
    },
    {
        username:"sasha",
        password:"123"
    }
]

function isUserValid(user,pass){
    for(var i=0; i<database.length; i++){
        if(database[i].username === user && database[i].password === pass){
            return true;    
        }
    } return false;  // si no se cumple el loop retornará false
}

function signIn (user,pass){
    if (isUserValid(user,pass)){  // si isUserValid es true entonces...
        alert("Bienvenido a tu Muro de pacotilla");
    } else{
        alert("Hmmm... No te conozco");
    }
    
}
signIn(myUser, myPass);