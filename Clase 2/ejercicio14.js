function validarForm() {
    const nombreValido = true;
    const passwordValido = validarLargo(document.form1.texto.value, 5);

    const resultado = nombreValido && passwordValido;

if (resultado) {
    alert ('Es válido.')
} else {
    alert ('No es válido.')
}
}



function validarLargo(texto, LargoRequerido) {
    return texto.length >= LargoRequerido;
}