const numeros = [12, 20, 31, 4, 11];

let mayor = 0;

/*for (let i = 0; i < numeros.length; i++) {
  const num = numeros.sort(function (a, b) {
    return a - b;
  });
}*/

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}

console.log(`El número mayor de esta lista es ${mayor}`);
