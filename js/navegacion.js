/* MENÚ HAMBURGUESA: una sola función abre/cierra y actualiza la accesibilidad. */
const cabecera = document.querySelector('.site-header');
const botonMenu = cabecera.querySelector('.menu-toggle');
const menu = cabecera.querySelector('nav');
const pantallaMovil = window.matchMedia('(max-width: 900px)');
function cambiarMenu(abierto) {
    cabecera.classList.toggle('menu-abierto', abierto);
    botonMenu.setAttribute('aria-expanded', String(abierto));
    botonMenu.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    botonMenu.querySelector('[aria-hidden]').textContent = abierto ? '×' : '☰';
}
// Solo ocultamos el menú móvil cuando el control ya está preparado.
cabecera.classList.add('menu-preparado');
botonMenu.addEventListener('click', () => cambiarMenu(botonMenu.getAttribute('aria-expanded') !== 'true'));
// Escape devuelve el foco al botón; no atrapamos el teclado dentro del menú.
document.addEventListener('keydown', evento => {
    if (evento.key === 'Escape' && botonMenu.getAttribute('aria-expanded') === 'true') {
        cambiarMenu(false);
        botonMenu.focus();
    }
});
menu.addEventListener('click', evento => {
    if (evento.target.closest('a')) cambiarMenu(false);
});
// Al cambiar entre móvil y escritorio dejamos un estado predecible.
pantallaMovil.addEventListener('change', () => {
    if (pantallaMovil.matches && menu.contains(document.activeElement)) botonMenu.focus();
    cambiarMenu(false);
});
