const cuadrado = document.getElementsByClassName('cuadrado')[0];
const rojo = document.getElementById('rojo');
const borde = document.getElementById('borde');
const reset = document.getElementById('reset');

rojo.addEventListener('click', function () {
    /*No se agrega la "e" porque eso seleccionaría al color, no al cuadrado.*/
    cuadrado.classList.add('rojo');
})

borde.addEventListener('click', function () {
    cuadrado.classList.add('borde');
})

reset.addEventListener('click', function () {
    cuadrado.classList.remove('rojo', 'borde');
})