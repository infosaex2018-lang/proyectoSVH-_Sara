/* COMPLEMENTO ACCESIBLE. La lógica original sigue en especies.html.
   Solo añadimos nombres y estado al carrusel que se ha utilizado. */
document.querySelectorAll('.carrusel-especie').forEach(carrusel => {
    const nombre = carrusel.closest('.especie-mundo').querySelector('h2').textContent.trim();
    carrusel.setAttribute('role', 'region');
    carrusel.setAttribute('aria-label', 'Carrusel de ' + nombre);
    const indicadores = carrusel.querySelectorAll('.indicador');
    const slides = carrusel.querySelectorAll('.slide-especie');
    const zona = carrusel.querySelector('.slides-especie');
    zona.setAttribute('aria-live', 'polite');
    carrusel.querySelector('.anterior').setAttribute('aria-label', 'Diapositiva anterior de ' + nombre);
    carrusel.querySelector('.siguiente').setAttribute('aria-label', 'Diapositiva siguiente de ' + nombre);
    indicadores.forEach((indicador, indice) => indicador.setAttribute('aria-label', nombre + ': diapositiva ' + (indice + 1) + ' de ' + slides.length));
    function actualizarEstado() {
        indicadores.forEach(indicador => indicador.setAttribute('aria-pressed', String(indicador.classList.contains('activo'))));
    }
    // El evento llega aquí después del manejador original del botón pulsado.
    carrusel.addEventListener('click', actualizarEstado);
    actualizarEstado();
});
