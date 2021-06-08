frasesPeliculas = [ {"id": "1", "titulo": "oficial y caballero", "frase": "Mayo......nesa!!"},
                    {"id": "2", "titulo": "la princesa prometida","frase": "Me llamo Iñigo Montoya, tu mataste a mi padre, preparate a morir"},
                    {"id": "3", "titulo": "lo que el viento se llevo", "frase": "A dios pongo por testigo que nunca jamas volveré a pasar hambre!!"},
                    {"id": "4", "titulo": "amelie", "frase": "Son tiempos difíciles para los soñadores"},
                    {"id": "5", "titulo": "pulp Fiction", "frase": "Estoy a veinte minutos de allí. Llegaré en diez"},
                    {"id": "6", "titulo": "yoy story", "frase": "Hasta el infinito....y más alla!!"},
                    {"id": "7", "titulo": "hercules", "frase": "La fuerza de un verdadero Dios se mide por la fuerza del corazón"},
                    ]



const uno= document.getElementById("1");
const dos= document.getElementById("2");
const tres= document.getElementById("3");
const cuatro= document.getElementById("4");
const cinco= document.getElementById("5");
const seis= document.getElementById("6");
const siete= document.getElementById("7");

const right= "acierto";
const wrong = "prueba otra vez";


uno.addEventListener("click", elJuego);   

function elJuego(){
    if( uno == frasesPeliculas[0]["titulo"])
    document.getElementById("message").innerText = right;
    else{
        document.getElementById("message").innerText = wrong;
    }
};







        

    

    













