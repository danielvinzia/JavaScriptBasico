var frutas = ["Manzana", "Banana", "Cereza", "Frutilla"];
// agrega al final
var masFrutas = frutas.push("Uvas");
// borra el ultimo
var ultimo = frutas.pop("Uvas");
// agrega al principio
var nuevaLongitud = frutas.unshift("Uvas");
// borra el primero
var borrarFruta = frutas.shift("Uvas");

var posicion = frutas.indexOf("Cereza");

console.log(frutas);