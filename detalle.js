function filtrarMascotas() {
    const selectRaza = document.getElementById('raza');
    const categoriaSeleccionada = selectRaza.value;

    const productCards = document.getElementsByClassName('product-card');
    for (let i = 0; i < productCards.length; i++) {
        const productCard = productCards[i];
        const categoriaProducto = productCard.getAttribute('data-category');

        if (categoriaSeleccionada === 'todos' || categoriaSeleccionada === categoriaProducto) {
            productCard.style.display = 'block';
        } else {
            productCard.style.display = 'none';
        }
    }
}

document.getElementById('raza').addEventListener('change', filtrarMascotas);

function volver() {
    history.back();
}

llenarDetalles();
