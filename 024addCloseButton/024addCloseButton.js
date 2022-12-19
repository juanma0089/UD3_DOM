// 024addCloseButton.html/.js: Agregar un botón de cierre: Hay una lista de mensajes.
// Usa JavaScript para agregar un botón de cierre en la esquina superior derecha de cada 
// mensaje. El resultado debería verse algo así:
"use strict";
//*Seleccionamos todos los div con clase texto creando un array mediante querySelectorAll
let textos = document.querySelectorAll('.texto');

//*Lo recorremos y vamos insertando el "botón" justo dentro del elemento.
    for(let texto of textos) {
      texto.insertAdjacentHTML("afterbegin", '<button class="btnCerrar">[x]</button>');
    }