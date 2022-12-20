// 031addOption.html/.js: Añade una opción al select. Tenemos un <select>:
// <select id="genres">
//   <option value="rock">Rock</option>
//   <option value="blues" selected>Blues</option>
// </select>
// Utiliza JavaScript para:
// Mostrar el valor y el texto del option seleccionado.
// Añadir un option: <option value="classic">Classic</option>.
// Seleccionarlo.
// Nota, si has hecho todo bien, tu alert debería mostrar blues.
'use strict';

let seleccion = document.getElementById('genres');

//* dentro del select obtenemos el option que tenga el atributo 'selected'
let opcionSeleccionada = seleccion.options[seleccion.selectedIndex];

//* mostramos el value que tenga mediante un alert
  alert( opcionSeleccionada.value );

//* creamos el nuevo option
let opcionNueva = new Option('Classic','classic');

//* lo integramos dentro del select como una opción más
seleccion.append(opcionNueva);

//*le indicamos que será despues de mostrar el alert la seleccionada por defecto
opcionNueva.selected = true;