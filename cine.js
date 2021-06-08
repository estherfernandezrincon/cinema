frasesPeliculas = [ {"id": "1", "titulo": "oficial y caballero", "frase": "Mayo......nesa!!"},
                    {"id": "2", "titulo": "la princesa prometida","frase": "Me llamo Iñigo Montoya, tu mataste a mi padre, preparate a morir"},
                    {"id": "3", "titulo": "lo que el viento se llevo", "frase": "A dios pongo por testigo que nunca jamas volveré a pasar hambre!!"},
                    {"id": "4", "titulo": "amelie", "frase": "Son tiempos difíciles para los soñadores"},
                    {"id": "5", "titulo": "pulp Fiction", "frase": "Estoy a veinte minutos de allí. Llegaré en diez"},
                    {"id": "6", "titulo": "yoy story", "frase": "Hasta el infinito....y más alla!!"},
                    {"id": "7", "titulo": "hercules", "frase": "La fuerza de un verdadero Dios se mide por la fuerza del corazón"},
                    ]

const msg = document.getElementById("message");

const unoInput= document.getElementById("1");
const unoBtn = document.getElementById("1btn");

const dosInput= document.getElementById("2");
const dosBtn= document.getElementById("2btn");

const tres= document.getElementById("3btn");
const cuatro= document.getElementById("4btn");
const cinco= document.getElementById("5btn");
const seis= document.getElementById("6btn");
const siete= document.getElementById("7btn");

const right= "acierto";
const wrong = "prueba otra vez";


function elJuego1(){
    const valor= unoInput.value.toLowerCase();
    const respuesta = frasesPeliculas[0]["titulo"];

    if( valor === respuesta){
        msg.innerText = right;
    } else{
        msg.innerText = wrong;
    }
};


unoBtn.addEventListener("click", elJuego1);  

function elJuego2(){
    const valor= dosInput.value.toLowerCase();
    const respuesta = frasesPeliculas[1]["titulo"];

    if( valor === respuesta){
        msg.innerText = right;
    } else{
        msg.innerText = wrong;
    }
};

dosBtn.addEventListener("click", elJuego2);  

        

    

    













