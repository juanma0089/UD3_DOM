// 023collapsableMenu.html/.js: Crea un menú que se abra/colapse al hacer click. Ej:
"use strict";

//*Primero seleccionamos el menu completo 
let menu = document.getElementById('desplegable');
//* Luego la clase título(span)
let titulo = menu.querySelector('.titulo');

//* Al hacer el click en el título realizamos la siguiente función la cual coloca la clase open
titulo.onclick = function() {

  menu.classList.toggle('open');

};