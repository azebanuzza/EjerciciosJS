const edad = parseInt(prompt("Ingrese su edad.", ""));

if (Number.isNaN(edad)) {
  document.write("Debe ingresar un valor numérico.");
} else if (edad >= 18) {
  document.write("Puede conducir");
} else {
  document.write("No puede conducir");
}
