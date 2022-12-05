// 007tagInComment.html/.js: Etiqueta en comentario: ¿Qué muestra este código?

"use strict";
let body = document.body;
        body.innerHTML = "<!--" + body.tagName + "-->";
        alert( body.firstChild.data );

        
        // El resultado del alert es BODY.
        // Se está reemplazando el contenido del body con el comentario ("<!--" + body.tagName + "-->
        // Al usar tagName siempre va en mayúsculas. de ahí el alert en mayúsculas.
        // Con firstChild obtenemos el primer nodo hijo, en este caso solo hay uno que es el comentario.
        // Con data obtenemos el contenido del comentario. 