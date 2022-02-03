var opcionA = "piedra";
var opcionB = "papel";
var opcionC = "tijera";
var maquina = Math.random();
var elegi;

function juego(elegi) {
    if (elegi === "piedra") {
        if (maquina < 0.5) {
            console.log("GANASTE");
            console.log("vos elegiste Piedra, la maquina eligio Tijera");
        } else {
            console.log("PERDISTE");
            console.log("vos elegiste Piedra, la maquina eligio Papel");
        }
    } else if (elegi === "papel") {
        if (maquina < 0.5) {
            console.log("GANASTE");
            console.log("vos elegiste Papel, la maquina eligio Piedra");
        } else {
            console.log("PERDISTE");
            console.log("vos elegiste Papel, la maquina eligio Tijeras");
        }
    } else if (elegi === "tijera") {
        if (maquina < 0.5) {
            console.log("GANASTE");
            console.log("vos elegiste Tijeras, la maquina eligio Papel");
        } else {
            console.log("PERDISTE");
            console.log("vos elegiste Tijeras, la maquina eligio piedra");
        }
    }
}

console.log("Juega a Piedra, Papel o Tijeras");
console.log("Elige que quieres");
elegi = prompt("escribe: piedra, papel o tijera");
juego(elegi);