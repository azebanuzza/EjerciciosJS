const items = document.getElementsByClassName('item');

function cambiarVisibilidad() {
    const item = items[1];
    if (item.style.visibility == ''){
        item.style.visibility = 'hidden';
    } else {
        item.style.visibility = '';
    }
}

setInterval(cambiarVisibilidad, 600); //1000 es un segundo