// 004searchElements.html/.js:Aquí está el documento con la tabla y el formulario.
//¿Cómo encontrar?...
//La tabla con id="age-table".
//T.odos los elementos label dentro de la tabla (debería haber 3).
//El primer td en la tabla (con la palabra “Age”).
//El form con name="search"
//El primer input en ese formulario.
//El último input en ese formulario.
//Abra la página index.html en una ventana separada y haga uso de las herramientas del 
//navegador..
'use strict';


//?La tabla con id="age-table".
let tabla = document.getElementById('age-table');

console.log(tabla);

//?T.odos los elementos label dentro de la tabla (debería haber 3).
let elementosTabla = tabla.querySelectorAll('td > label');

console.log(elementosTabla);


//?El primer td en la tabla (con la palabra “Age”).
let primerElement = tabla.getElementsByTagName('td')[0];

console.log(primerElement);


//?El form con name="search"
let formName = document.getElementsByName('search')[0];

console.log(formName);

//?El primer input en ese formulario.
let primerInput = formName.querySelector('input');

console.log(primerInput);

//?El último input en ese formulario.
let ultimoInput = formName.querySelectorAll('input');

console.log(ultimoInput[ultimoInput.length-1]);