// 003diagonal.html/.js: Seleccionar todas las celdas diagonales Escribe el código para 
//pintar todas las celdas diagonales de rojo. Necesitarás obtener todas las <td> de la 
//<table> y pintarlas usando el código:
// td debe ser la referencia a la celda de la tabla
//td.style.backgroundColor = 'red'; El resultado debe ser: 
'use strict';

let tabla = document.body.firstElementChild;

    for (let i = 0; i < tabla.rows.length; i++) {
      let row = tabla.rows[i];
      row.cells[i].style.backgroundColor = 'red';
    }