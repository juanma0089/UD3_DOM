// 002siblings.html/.js: Si elem – es un elemento nodo arbitrario del DOM...
//¿Es cierto que elem.lastChild.nextSibling siempre es null?
//¿Es cierto que elem.children[0].previousSibling siempre es null ?
//Demúestralo.
'use strict';

// ?¿Es cierto que elem.lastChild.nextSibling siempre es null?
//*Sí, El elemento elem.lastChild es el último, no tiene etiqueta hermanos nextSibling.

let elem = document.body.children[0];

console.log (elem.lastChild.nextSibling);


//?¿Es cierto que elem.children[0].previousSibling siempre es null ?
//*No, es el primer hijo entre elementos,  pero puede haber nodos que no son elementos antes que él, como un nodo texto.

let previo = elem.children[0].previousSibling

console.log(previo);
