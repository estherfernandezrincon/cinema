frasesPeliculas = [ {"id": "1", "titulo": "oficial y caballero", "frase": "Mayo......nesa!!"},
                    {"id": "2", "titulo": "la princesa prometida","frase": "Me llamo Iñigo Montoya, tu mataste a mi padre, preparate a morir"},
                    {"id": "3", "titulo": "lo que el viento se llevo", "frase": "A dios pongo por testigo que nunca jamas volveré a pasar hambre!!"},
                    {"id": "4", "titulo": "amelie", "frase": "Son tiempos difíciles para los soñadores"},
                    {"id": "5", "titulo": "pulp fiction", "frase": "Estoy a veinte minutos de allí. Llegaré en diez"},
                    {"id": "6", "titulo": "toy story", "frase": "Hasta el infinito....y más alla!!"},
                    {"id": "7", "titulo": "hercules", "frase": "La fuerza de un verdadero Dios se mide por la fuerza del corazón"},
                    ]

const msg = document.getElementById("message");


const unoBtn    = document.getElementById("1btn");
const dosBtn    = document.getElementById("2btn");
const tresBtn   = document.getElementById("3btn");
const cuatroBtn = document.getElementById("4btn");
const cincoBtn  = document.getElementById("5btn");
const seisBtn   = document.getElementById("6btn");
const sieteBtn  = document.getElementById("7btn");

const right = "acierto";
const wrong = "prueba otra vez";

function elJuego(id){
    const Input= document.getElementById(id);
    const valor= Input.value.toLowerCase();
    const respuesta = frasesPeliculas[id-1]["titulo"];

    console.log(valor)

    if( valor === respuesta){
        console.log(respuesta);
        msg.innerText = right;
    } else{
        msg.innerText = wrong;
    }
};

const botones = [];
botones.push(unoBtn, dosBtn, tresBtn, cuatroBtn, cincoBtn, seisBtn, sieteBtn);
console.log(botones)

for (let i = 0; i < botones.length; i++) {
    for (let id= 1; id <= botones.length; id++) {
 
    botones[i].addEventListener("click", ()  => {elJuego(id)}); 
    }
        
}








