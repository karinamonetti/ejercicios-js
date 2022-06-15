/* 
        Dado una array de strings, imprimir por conola, en orden inverso.
        RESULTADO:
        "?"
        "estas"
        "como"
        "hola"
        */

        let array = ["hola", "como", "estas", "?"]

        // Valor inicial = 3 = array.length - 1 
        // Valor final = 0
        // valor de salto = -1 

        //3min 14.13


        for (i=array.length-1; i>=0 ;i--){
            console.log(array[i]);
        }