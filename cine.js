peliculas= JSON.parse(frasesPeliculas)


function elJuego() {
    var right= "acierto";
    var wrong = "prueba otra vez";
    var peli = document.getElementById("1");

    if(peli == peliculas[id][titulo])
        document.getElementById("message").innerHTML = right;
        else{
            document.getElementById("message").innerHTML = wrong;
        }
}

        

    

    













