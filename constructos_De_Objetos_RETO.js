function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autos = [];
var validacion = "s";

console.log("Bienvenido, ingrese el primer auto al sistema");

while (validacion === "s") {
    var marca = prompt("ingresa la marca de auto");
    var modelo = prompt("ingresa el modelo de auto");
    var annio = prompt("ingresa el annio de auto");

    autos.push(new auto(marca, modelo, annio));
    validacion = prompt("Desea ingresar otro auto, si es asi oprima s");
}

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}