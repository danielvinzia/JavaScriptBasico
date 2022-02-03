var maquina = Math.random();
var elegi;

function juego(elegi) {
    switch (elegi) {
        case "piedra":
            if (maquina < 0.5) {
                console.log("GANASTE");
                console.log("vos elegiste Piedra, la maquina eligio Tijera");
            } else {
                console.log("PERDISTE");
                console.log("vos elegiste Piedra, la maquina eligio Papel");
            }
            break;
        case "papel":
            if (maquina < 0.5) {
                console.log("GANASTE");
                console.log("vos elegiste Papel, la maquina eligio Piedra");
            } else {
                console.log("PERDISTE");
                console.log("vos elegiste Papel, la maquina eligio Tijeras");
            }
            break;
        case "tijera":
            if (maquina < 0.5) {
                console.log("GANASTE");
                console.log("vos elegiste Tijeras, la maquina eligio Papel");
            } else {
                console.log("PERDISTE");
                console.log("vos elegiste Tijeras, la maquina eligio piedra");
            }
            break;
        default:
            console.log("No escribiste bien, te pedi que escribas: piedra, papel o tijera");
            break;
    }
}
console.log("Juega a Piedra, Papel o Tijeras");
console.log("Elige que quieres");
elegi = prompt("escribe: piedra, papel o tijera");
juego(elegi);