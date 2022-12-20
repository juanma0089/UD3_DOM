// 27returnFalse.html/.js:¿Por qué en el código de abajo return false no funciona?
// <script>
//   function handler() {
//     alert( "..." );
//     return false;
//   }
// </script>
// <a href="https://w3.org" onclick="handler()">el navegador irá a w3.org</a>
'use strict';
//*La sintaxis no es correcta, un alert no debería estar dentro de una función. 
//*Nunca llega al return, rompe el árbol de eventos.
function handler() {
    alert( "..." );
    return false;
}