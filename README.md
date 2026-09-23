# GALATEA

Proyecto académico de creación y publicación de páginas web, desarrollado por **Sara**. GALATEA es un universo ficticio de exploración de mundos, especies y culturas, acompañado de artículos divulgativos sobre astronomía y vida extraterrestre.

El objetivo es aprender a construir, organizar y publicar una web con identidad visual propia mediante HTML, CSS y JavaScript. El diseño conserva la estética espacial original: fondos oscuros, azul luminoso, blanco y detalles dorados.

## Realidad y ficción

Los planetas y especies de GALATEA son imaginarios. Los artículos de divulgación y los escenarios hipotéticos están identificados. `BIBLIA_GALATEA.md` es la referencia del universo y se conserva intacta. Existen discrepancias entre algunos textos antiguos y la Biblia; están recogidas en `documentacion/INFORME_ENTREGA.md` para que la autora decida cómo resolverlas.

| Mundo | Especie representativa |
| --- | --- |
| Lumia | Lumienses |
| Krynar | Krynerios |
| Layen | Layenses |
| Portha | Portenses |

## Estructura del sitio

| Página | Contenido |
| --- | --- |
| `index.html` | Explorar: portada, vídeo, mundos y acceso al blog |
| `mundos.html` | Presentación de los cuatro mundos |
| `especies.html` | Cuatro carruseles independientes de cinco diapositivas |
| `blog.html` | Listado de los cuatro artículos |
| `alien-vs-extraterrestre.html` | Alien y extraterrestre |
| `vida-en-otros-planetas.html` | Posibilidad de vida en otros planetas |
| `detectar-vida.html` | Búsqueda de señales de vida |
| `viajar-planeta-dos-lunas.html` | Escenario hipotético de dos lunas |
| `proyecto.html` | Concepto y origen académico |
| `contacto.html` | Formulario de demostración, sin envío real |
| `aviso-legal.html` | Aviso legal de ejemplo académico |
| `privacidad.html` | Política de privacidad de ejemplo académico |
| `politica_de_cookies.html` | Información sobre cookies |

## Tecnologías y funcionamiento

- **HTML5:** estructura, enlaces relativos, imágenes, vídeo y formulario.
- **CSS3:** Flexbox, Grid, media queries y títulos con `clamp()`.
- **JavaScript:** menú hamburguesa, cuatro carruseles reutilizables y validación demostrativa de contacto. Sin frameworks ni compilación.
- **Google Fonts:** Orbitron se carga desde Google Fonts y se utiliza en la marca GALATEA. Los párrafos usan Arial/Helvetica/sans-serif para facilitar la lectura. Hay fuente alternativa si no hay conexión.
- **Responsive:** navegación horizontal en escritorio; hamburguesa hasta 900 px. Imágenes adaptables y texto de lectura de al menos 16 px en las comprobaciones realizadas.
- **Accesibilidad:** enlace para saltar al contenido, foco visible, controles etiquetados, Escape para cerrar el menú y botones de carrusel con áreas táctiles ampliadas. Sin JavaScript los enlaces de navegación permanecen visibles.
- **Carruseles:** el código original permanece dentro de `especies.html`. Cada carrusel tiene su propio índice y cambia imagen, título y texto al pulsar flechas o indicadores. No hay reproducción automática.

## Carpetas y organización del CSS

| Ruta | Función |
| --- | --- |
| `css/style.css` | Base original conservada; incluye estilos históricos y media queries |
| `css/global.css` | Ajustes compartidos: marca, menú, tipografía, controles y footer |
| `css/index.css`, `mundos.css`, `especies.css`, `blog.css`, `proyecto.css`, `contacto.css` | Ajustes específicos de cada página |
| `css/articulos.css` | Ajustes comunes de los cuatro artículos |
| `css/legal.css` | Ajustes de las tres páginas legales |
| `js/navegacion.js` | Menú accesible compartido |
| `js/accesibilidad-carruseles.js` | Nombres y estados de los controles; no sustituye la lógica original |
| `js/contacto.js` | Validación demostrativa, sin enviar datos |
| `imagenes/` | 34 imágenes originales sin modificar |
| `videos/` | 2 vídeos originales sin modificar |
| `favicon.ico` | Icono derivado del logo original |
| `documentacion/` | Manual PDF, auditoría e informe de entrega |
| `BIBLIA_GALATEA.md` | Referencia del universo original |
| `estructura web.txt` | Esquema inicial conservado como documento histórico |

Orden de carga: **style.css → global.css → CSS específico**. Se eligió una organización conservadora: no se repartieron ni duplicaron miles de líneas del CSS original. Las reglas antiguas todavía permanecen en style.css para evitar regresiones antes de la entrega. Para un ajuste nuevo, utiliza el archivo específico adecuado.

## Cómo visualizar el proyecto

1. Descarga y descomprime el ZIP completo.
2. Abre `index.html` en un navegador de escritorio o móvil. No abras el HTML dentro del ZIP.
3. Mantén juntas las carpetas `css`, `js`, `imagenes` y `videos`.
4. Para Google Fonts y el enlace externo a NASA hace falta conexión a Internet.

También se puede servir la carpeta con una extensión de servidor local del editor. Si Python está instalado, ejecuta `python -m http.server 8000` desde la raíz y abre `http://localhost:8000`.

## Publicación y entrega

**CDmon:** PENDIENTE DE AÑADIR LA URL REAL. No se encontró ninguna URL en el proyecto recibido.

**GitHub:** PENDIENTE DE AÑADIR LA URL REAL DEL REPOSITORIO.

1. Haz una copia de la versión publicada antes de actualizarla.
2. Sube al directorio público del alojamiento todos los HTML y las carpetas `css`, `js`, `imagenes`, `videos`, además de `favicon.ico`.
3. `index.html` debe quedar en la raíz pública, no dentro de otra carpeta accidental.
4. Usa exactamente `css` en minúsculas. Linux distingue `CSS` de `css`.
5. Comprueba portada, navegación, imágenes, vídeos, artículos, footer y los cuatro carruseles en la URL pública. Actualiza la caché si aparecen estilos anteriores.
6. Actualiza el repositorio GitHub y añade ambas URLs a este README y a la entrega académica.

Las pruebas locales no equivalen a una publicación en CDmon ni a una subida a GitHub. Estas acciones no se han realizado desde esta revisión.

## Contacto y límites de esta versión

El formulario **no envía correos**. Permite validar los campos y muestra un aviso explícito; requiere conectar un servicio real antes de utilizarlo para recibir mensajes. Los datos del titular y los correos `.example` de los textos legales son ficticios: se conservan como parte del ejercicio y necesitan revisión antes de un uso público real.

Se conservan todos los recursos originales, incluidos los vídeos de mayor tamaño. No se han comprimido ni sustituido para evitar pérdida de calidad.

## Autoría

**Sara — proyecto GALATEA.** Autoría identificada en el README recibido. No se han añadido apellidos, centro, docente ni datos personales no proporcionados. Los derechos y procedencia de cada recurso deberán documentarse por la autora cuando corresponda.

Consulta el manual de usuario y el informe de entrega para las comprobaciones y tareas pendientes.
