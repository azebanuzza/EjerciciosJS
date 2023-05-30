function getNameDiasForMes(mes){
    if(Number.isNaN(mes)) return false;

    if(mes < 1 || mes > 12) return false; 

    mes--;

const data = [
    {nombre: 'Enero',
    dias: 31},

    {nombre: 'Febrero',
    dias: 28},

    {nombre: 'Marzo',
    dias: 31},

    {nombre: 'Abril',
    dias: 30},

    {nombre: 'Mayo',
    dias: 31},

    {nombre: 'Junio',
    dias: 30},

    {nombre: 'Julio',
    dias: 31},

    {nombre: 'Agosto',
    dias: 31},

    {nombre: 'Septiembre',
    dias: 30},

    {nombre: 'Octubre',
    dias: 31},
        
    {nombre: 'Noviembre',
    dias: 30},

    {nombre: 'Diciembre',
    dias: 31},
]

return data[mes];
}

const numMes = parseInt(prompt('Ingrese el mes del año (número del 1 al 12).', ''));
const resultado = getNameDiasForMes(numMes);

//console.log(numMes);
if(resultado) {
    alert(`El mes ${resultado.nombre} tiene ${resultado.dias} días.`)
} else {
    alert('Mes inválido. Ingrese número de mes del 1 al 12.');
}