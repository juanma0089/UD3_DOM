// 022handlers.html/.js: Hay un botón en la variable. No hay handlers en él.
// ¿Qué handlers se ejecutan con el click después del siguiente código? ¿Qué alertas se 
// muestran?
"use strict";

button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);

//? ¿Qué handlers se ejecutan con el click después del siguiente código?
//* Se ejecuta el primer handler, ya que removeEventListener no borra el primer handler,
//* dado que su sintaxis no es la correcta. Hay que indicar la función que se le asignó a addEventListener (esta función debe esta definida por nosotros)
//*ejemplo:
//  function handler() {
//     alert(1);
//   }
//   button.addEventListener("click", handler);
//   button.removeEventListener("click", handler);
//   button.onclick = () => alert(2);
//* Y también se ejecuta el handler onclick, ya que es diferente a addEventListener.

//?¿Qué alertas se muestran?
//* muestra el primer alert y el alert de onclick.