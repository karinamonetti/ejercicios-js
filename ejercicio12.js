let texto = "Probé de todo en la vida, tuve adicciones. Llegué a tocar fondo. Estaba lastimando a toda la gente que me rodeaba. Hasta que dije basta, no quiero más esto en mi vida"

let textoAray= texto.split(" ");

for (i=0; i<textoAray.length;i++){
    if(textoAray[i]==="mi" || textoAray[i]==="vida"){
        console.log("Contiene la palabra 'mi' o 'vida'");
    }
}