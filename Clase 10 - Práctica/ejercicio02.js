const distancia = parseInt(
  prompt("Ingrese la distancia en metros hasta su destino.", "")
);

if (Number.isNaN(distancia)) {
  document.write("Ingrese un valor numérico.");
} else if (distancia <= 1000) {
  document.write("Recomiendo ir a pie.");
} else if (distancia > 1000 && distancia <= 10000) {
  document.write("Recomiendo ir en bicicleta.");
} else if (distancia > 10000 && distancia <= 30000) {
  document.write("Recomiendo ir en colectivo.");
} else if (distancia > 30000 && distancia <= 100000) {
  document.write("Recomiendo ir en auto.");
} else if (distancia > 100000) {
  document.write("Recomiendo ir en avión.");
}
