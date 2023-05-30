const alumnos = [
    {
        "nombre": 'Flavia',
        "edad": 10
    },

    {
        "nombre": 'Pablo',
        "edad": 3
    },

    {
        "nombre": 'Lucas',
        "edad": 5
    },

    {
        "nombre": 'Rodrigo',
        "edad": 2
    },

    {
        "nombre": 'Daniela',
        "edad": 8
    },

]

//Sólo muestra los alumnos con edad > 4
// Imprimirlos > recorrer > for

const chicos = alumnos.filter (
    alumno => alumno.edad >= 4
)

console.log(chicos)

for(let i = 0; i<chicos.length; i++) {
    document.write(`<p>Niño: ${chicos[i].nombre}, cuya edad es ${chicos[i].edad}</p>`)
}

/*for(let i = 0; i<alumnos.length; i++) {
    document.write(`<p>Niño: ${alumnos[i].nombre}, cuya edad es ${alumnos[i].edad}</p>`)
}*/