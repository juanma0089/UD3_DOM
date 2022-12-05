// 015creatingCalendar.html/.js: Escribe una función createCalendar(elem, year, month).
// Su llamado debe crear un calendario para el año y mes dados y ponerlo dentro de 
// elem. El calendario debe ser una tabla, donde una semana es <tr>, y un día es<td>. Los 
// encabezados de la tabla deben ser <th> con los nombres de los días de la semana: el 
// primer día debe ser “lunes” y así hasta “domingo”. 

"use strict";

function getDay(day) { 
    //?creamos variable para saber que día es
    let dia = day.getDay();
    //?si es el dia 0 (domingo)
    if (dia == 0){
    //?hacemos el domingo el día 7    
        dia = 7;
    }  
    //?devolvemos el domingo restandole 1 (siendo el día 6)
    return dia - 1;
  }

function createCalendar(elem, year, month) {

    //?primer mes dado, le restamos 1 ya que enero no empieza en el 1 sino en el 0
    let primerMes = month -1;

    //?primer día del mes
    let dia = new Date(year,primerMes)

    //?Creamos la estructura del encabezado
    
    let tabla = "<table><tr><th>L</th><th>M</th><th>X</th><th>J</th><th>V</th><th>S</th><th>D</th></tr><tr>";


    //?meteremos espacios con <td></td> vacíos desde el lunes (de la tabla) hasta el día 1 que empieza el mes(dado que el día 1 no empieza siempre el Lunes) y no mostraremos los días del mes anterior
   
    for (let i = 0; i < getDay(dia); i++) {
        tabla += "<td></td>";
      }

    //?empezamos a crear desde el dia 1 del mes hasta el último
    while (dia.getMonth() == primerMes) {
        //?añadimos una celda con cada día
        tabla += "<td>" + dia.getDate() + "</td>";

        //? si el dia da como resultado de divirlo entre 7 = 6 sería domingo (empezamos en 0 la semana con la función getDay)
        //? añadimos un salto 
        if (getDay(dia) % 7 == 6) { 
          tabla += "</tr><tr>";
        }
        //?aumentamos 1 día para ir rellenando cada celda de la semana
        dia.setDate(dia.getDate() + 1);
      }

      //?hacemos lo mismo al finalizar el mes, añadimos <td></td> vacíos para completar la tabla sin mostrar los días del mes siguiente  
    if (getDay(dia) != 0) {
        for (let i = getDay(dia); i < 7; i++) {
            tabla += "<td></td>";
        }
        }

        //?cerramos la tabla
      tabla += '</tr></table>';
 
      //?insertamos la tabla al html
      elem.innerHTML = tabla;
      
}

let calendario = document.getElementById('calendario');

createCalendar(calendario, 2012, 9);
