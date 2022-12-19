// 025hideMessajeAfterClose.html/.js: Dale funcionalidad al botón de cierre que has 
// creado para la lista de mensajes del ejercicio anterior. Es decir, haz que funcionen. 
"use strict";
//*Seleccionamos todos los div con clase texto creando un array mediante querySelectorAll
let textos = document.querySelectorAll('.texto');

//*Lo recorremos y vamos insertando el "botón" justo dentro del elemento.
    for(let texto of textos) {
      texto.insertAdjacentHTML("afterbegin", '<button class="btnCerrar"></button>[x]</button>');
//*evento onclick       
      texto.onclick = () => texto.remove();
    }