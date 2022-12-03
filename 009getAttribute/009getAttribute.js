// 009getAttribute.html/.js: Escribe el código para obtener el atributo data-widget-name 
// del documento y leer su valor.

"use strict";

let element = document.querySelector('div')

let valorAtrib = element.getAttribute('data-widget-name')

alert(valorAtrib);