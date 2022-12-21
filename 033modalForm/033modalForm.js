// 033modalForm.html/.js: Crea una función showPrompt(html, callback) que muestre un 
// formulario con el mensaje html, un campo input y botones OK/CANCELAR.
// Un usuario debe escribir algo en el campo de texto y pulsar Enter o el botón OK, 
// entonces callback(value) es llamado con el valor introducido.
// En caso contrario, si el usuario pulsa Esc o CANCELAR, entonces callback(null) es 
// llamado. En ambos casos se finaliza el proceso se y borra el formulario. Requisitos:
// El formulario debe estar en el centro de la ventana.
// El formulario es modal. Es decir que no habrá interacción con el resto de la página, 
// siempre que sea posible, hasta que el usuario lo cierre.
// Cuando se muestra el formulario, el foco debe estar en el <input> del usuario.
// Las teclas Tab/Shift+Tab deben alternar el foco entre los diferentes campos del 
// formulario, no se permite cambiar el foco a otros elementos de la página.
// Ejemplo de uso:
// showPrompt("Escribe algo<br>...inteligente :)", function(value) {
//   alert(value);
// });
'use strict';

let inputEnviado = document.getElementById('enviar');

inputEnviado.addEventListener('click', function(){

    let mensaje = document.getElementById('texto').value;
    if (mensaje == '' || mensaje == null) {
        alert("No has escrito, Olga se va a enfadar :D");
    }else{
        alert(mensaje);
    } 
});

//*Que si que he hecho lo que me ha salido de ahí, ya lo se :P