// 029selectListItems.html/.js: Cree una lista donde los elementos son seleccionables, 
// como en los administradores de archivos. Un clic en un elemento de la lista selecciona 
// solo ese elemento (agrega la clase .selected), deselecciona todos los demás.
// Si se hace un clic con Ctrl (Cmd para Mac), el estado seleccionado/deseleccionado 
// cambia para ese solo elemento, los otros elementos no se modifican.
// PD: Para esta tarea, podemos suponer que los elementos de la lista son solo de texto. 
// No hay etiquetas anidadas.  Evita la selección nativa del navegador del texto en los 
// clics.

"use strict";

let lista = document.getElementById('lista');

//*añadimos el evento a la lista
lista.addEventListener('click', function(x){
//*si no hacemos click en 'li' no seguimos ejecutando
    if(x.target.tagName != 'LI'){
        return;
    }
//*si hacemos click con Ctrl mandamos a la función de seleccionados
    if (x.ctrlKey || x.metaKey) {
        seleccionados(x.target);
    }else{
        seleccion(x.target);
    }
})
//*vamos añadiendo la clase marcado a cada 'li' que pulsemos con Ctrl pulsado
function seleccionados(li) {
    li.classList.toggle('marcado');
  }
//* 1 eliminamos la clase marcado de todos los 'li' (previamente seleccionados pulsando Ctrl + click)
//* 2 añadimos la clase marcado al 'li' en el que se haga click
  function seleccion(li) {
    let seleccionado = lista.querySelectorAll('.marcado');
    for(let elem of seleccionado) {
      elem.classList.remove('marcado');
    }
    li.classList.add('marcado');
  }  
