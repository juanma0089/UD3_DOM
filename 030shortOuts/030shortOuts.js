// 030shortOuts.html/.js: Crea una función runOnKeys(func, code1, code2, ... code_n) 
// que ejecute func al presionar simultáneamente las teclas con códigos code1, code2, ..., 
// code_n.
// Por ejemplo, el siguiente código muestra un alert cuando "Q" y "W" se presionan 
// juntas (en cualquier lenguaje, con o sin mayúscula)
// runOnKeys(
//   () => alert("¡Hola!"),
//   "KeyQ",
//   "KeyW"
'use strict';

() => alert("¡Hola!"),
  "KeyQ",
  "KeyW"