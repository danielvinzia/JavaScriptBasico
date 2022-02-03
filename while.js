var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function SaludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    SaludarEstudiantes(estudiante);
}