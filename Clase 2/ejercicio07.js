const nombre = prompt('Ingrese su nombre', '');
const nota = parseInt(prompt('Ingrese su nota del 0 al 10.', ''));

//Number.isNan valida si el dato ingresado es numérico.
if(Number.isNaN(nota) || nota > 10 || nota < 0) {
    document.write('La nota ingresada no es válida.')
} else if (nota >= 4 && nota <= 10) {
document.write(`${nombre} aprobó con la nota ${nota}.`)
} else {
    document.write(`${nombre} desaprobó con nota ${nota}.`)
}