// 013createList.html/.js: Escribir una interfaz para crear una lista de lo que ingresa un 
// usuario. Para cada item de la lista:
// Preguntar al usuario acerca del contenido usando prompt.
// Crear el <li> con ello y agregarlo a <ul>.
// Continuar hasta que el usuario cancela el ingreso (presionando Esc o con un ingreso 
// vacío).
// T.odos los elementos deben ser creados dinámicamente.
// Si el usuario ingresa etiquetas HTML, deben ser tratadas como texto.
"use strict";

let controlador = true;

//*creamos la etiqueta ul
let ul = document.createElement('ul');
//*la añadimos al body
    document.body.append(ul);

    while (controlador) {
    //*pedimos al usuario que introduzca texto
      let datos = prompt("Escribe algo para la lista");
      //*si no introduce nada el cotrolador lo pasamos a false y salimos del prompt
      if (!datos) {
        
        controlador = false;
        
        break;
      }
      //*creamos la etiqueta li
      let li = document.createElement('li');
      //*insertamos lo que haya escrito el usuario en li
      li.innerHTML = datos;
      //*añadimos dentro de la lista lo insertado junto a li
      ul.append(li);
    }
