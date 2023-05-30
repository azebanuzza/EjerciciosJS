const empleados = [
    {
        "nombre": 'Flavia',
        "trabajo": 'desarrollador'
    },
    {
        "nombre": 'Ramiro',
        "trabajo": 'abogado'
    },
    {
        "nombre": 'Rodolfo',
        "trabajo": 'desarrollador'
    },
    {
        "nombre": 'Rodrigo',
        "trabajo": 'desarrollador'
    },
    {
        "nombre": 'Romina',
        "trabajo": 'maestra'
    },
    {
        "nombre": 'Daniela',
        "trabajo": 'veterinaria'
    },
]

//Objetivo: Que muestre los desarrolladores
const desarrollador = empleados.filter (
    empleado => empleado.trabajo == 'desarrollador'
)

console.log(desarrollador);

const noDesarrollador = empleados.filter (
    empleado => empleado.trabajo !== 'desarrollador'
)

console.log(noDesarrollador);