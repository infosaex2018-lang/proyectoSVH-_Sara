/* DEMOSTRACIÓN: el navegador valida campos requeridos y correo.
   No se envía ni guarda ningún mensaje porque no hay backend configurado. */
const formulario = document.querySelector('#formulario-contacto');
formulario.addEventListener('submit', evento => {
    evento.preventDefault();
    document.querySelector('#estado-formulario').textContent = 'Campos validados. No se ha enviado el mensaje: este formulario es una demostración académica.';
});
formulario.querySelector('button[type="submit"]').disabled = false;
