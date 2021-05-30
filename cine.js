peliculas= JSON.parse(frasesPeliculas)


function elJuego(id) {
    let right= "acierto";
    let wrong = "prueba otra vez";
    let peli = document.getElementById(id);

    if(peli == peliculas[id][titulo])
        document.getElementById("message").innerHTML = right;
        else{
            document.getElementById("message").innerHTML = wrong;
        }
}

        

    

    













