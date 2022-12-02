// 005countDesdendant.html/.js: Hay un árbol estructurado como ul/li anidado.
// Escribe el código que para cada <li> muestra:
// ¿Cuál es el texto dentro de él (sin el subárbol)?
// El número de <li> anidados: todos los descendientes, incluidos los profundamente 
// anidados.

//?¿Cuál es el texto dentro de él (sin el subárbol)?

//*recorremos todo los li y buscamos el texto de cada uno.
for (let lista of document.querySelectorAll('li')) {
  
    let texto = lista.firstChild.data;

    alert(texto);

//? El número de <li> anidados: todos los descendientes, incluidos los profundamente nidados.

//*miramos cuantos elementos li tiene anidados cada uno de ellos
let numeroLi = lista.getElementsByTagName('li').length;

alert (texto + " = " + numeroLi);
}
