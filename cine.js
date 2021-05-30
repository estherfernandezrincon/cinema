peliculas= JSON.parse(frasesPeliculas)


function elJuego(id) {
    var right= "acierto";
    var wrong = "prueba otra vez";
    var peli = document.getElementById(id);

    if(peli == peliculas[id][titulo])
        document.getElementById("message").innerHTML = right;
        else{
            document.getElementById("message").innerHTML = wrong;
        }
}

        

    

    













