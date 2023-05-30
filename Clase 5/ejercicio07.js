const frutas = ["palta", "manzana", "bananas", "frutillas"];

console.log(frutas);
document.write(frutas + "<br/>");

console.log(frutas.sort());

//Las ordena alfabéticamente
const frutasOrdenadas = frutas.sort();

console.log(frutasOrdenadas);
document.write(frutasOrdenadas);

const numeros = [78, 10, 7, 21, 1, 5, 223];

//Modo incorrecto
console.log(numeros.sort()); //Los ordena como texto, en base al primer dígito.

//Modo correcto: De menor a mayor
const num = numeros.sort(function (a, b) {
  return a - b;
});

console.log(num);

//Modo correcto: De mayor a menor
const num2 = numeros.sort(function (a, b) {
  return b - a;
});

console.log(num2);

const nombres = [
  "Flavia",
  "Leonardo",
  "Camila",
  "Rodolfo",
  "Daniela",
  "Ramiro",
];

//Ordenados de A a Z
const nombresOrdenados = nombres.sort();
console.log(nombresOrdenados);

//Ordenados de la Z a la A
const nombresInverso = nombres.sort().reverse();
console.log(nombresInverso);
