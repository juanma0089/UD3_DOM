// 019notify.html/.js/.css: Escribir una función showNotification(options) que cree una 
// notificación: <div class="notification"> con el contenido dado. La notificación debería 
// desaparecer automáticamente después de 1.5 segundos. Las opciones son:
// muestra un elemento con el texto "Hello" cerca de la parte superior de la ventana

"use strict";

function showNotification({top = 0, right = 0, className, html}) {

    let notificacion = document.createElement('div');

    notificacion.className = "notification";
    notificacion.classList.add(className);
    notificacion.style.top = top + 'px';
    notificacion.style.right = right + 'px';
    notificacion.innerHTML = html;
    document.body.append(notificacion);

    setTimeout(() => notificacion.remove(), 1500);
}

let i = 1;
    setInterval(() => {
        showNotification({top: 10, right: 10, html: 'Hello ' + i++, className: "welcome"});
    }, 2000);