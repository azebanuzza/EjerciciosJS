function allParrafos() {
    const allparraf = document.getElementsByTagName('p');

    const num = allparraf.length; //
    console.log(num);

    alert(`Hay ${num} elementos <p> en este documento.`);
}

function caja1P() {
    const caja1P = document.getElementById('caja1'); //id en el div

    const caja1parrafos = caja1P.getElementsByTagName('p');
    
    console.log(caja1parrafos); //me muestra 5 párrafos

    const num = caja1parrafos.length;

    console.log(num);
    alert(`Hay ${num} elementos <p> en caja 1.`)
}

function caja2P() {
    const caja2P = document.getElementById('caja2');

    const caja2parrafos = caja2P.getElementsByTagName('p');
    console.log(caja2parrafos);

    const num = caja2parrafos.length;

    console.log(num);
    alert(`Hay ${num} elementos <p> en caja 2.`)
}