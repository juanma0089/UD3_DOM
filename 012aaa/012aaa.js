// 012aaa.html/.js: En el ejemplo de abajo, la llamada table.remove() quita la tabla del 
// documento. Pero si la ejecutas, puedes ver que el texto “aaa”` es aún visible. ¿Por qué 
// ocurre esto?

"use strict";

alert(table); // la tabla, tal como debería ser
  table.remove();
//  ¿Por qué aún está "aaa" en el documento?

//Al no estar dentro de una celda, no es posible eliminarla. 