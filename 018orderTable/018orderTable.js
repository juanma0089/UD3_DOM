// Puede haber más filas en ella.
// Escribe el código para ordenarla por la columna "name".
"use strict";

let contenidoTbody = document.querySelector('tbody');

// //? creamos un array de todos los tr de tbody "contenidoTbody.rows" y con ".sort" comparamos el primer td de cada tr con "cells[0].innerHtml" y ordenamos
let ordenarNombre = Array.from(contenidoTbody.rows).sort((a,b) => a.cells[0].innerHTML.localeCompare(b.cells[0].innerHTML));

//?añadimos a la tabla ordenado 
contenidoTbody.append(...ordenarNombre);


