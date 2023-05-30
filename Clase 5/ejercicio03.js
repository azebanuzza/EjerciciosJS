const numeros = [1, 5, 10, 15];

const dobles = numeros.map(function(num){ //"num" en este caso actúa como índice para cada elemento del array 'numeros'; se puede poner cualquier palabra ahí
    return num*2;
})

console.log(numeros);
console.log(dobles);