// 017htmlToList.html/.js: Inserta el HTML en la lista. Escribe el código para insertar 
// <li>2</li><li>3</li> entre dos <li> aquí:
"use strict";
//?indicamos el id del elemento de referencia + metodo de insercción +
//? (donde vamos a insertar en base al elemento de referencia + que insertamos)
//? en este caso justo despues del primer li con ide one 
one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');