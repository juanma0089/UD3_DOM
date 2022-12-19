// 026orderTable.html/.js: Haz que la tabla se pueda ordenar: los clics en elementos <th> 
// deberían ordenarla por la columna correspondiente. Cada <th> tiene su tipo de datos 
// en el atributo, como esto:
// <table id="grid">
//   <thead>
//     <tr>
//       <th data-type="number">Age</th>
//       <th data-type="string">Name</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>5</td>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>10</td>
//       <td>Ann</td>
//     </tr>
//     ...
//   </tbody>
// </table>
// En el ejemplo anterior la primera columna tiene números y la segunda cadena. La 
// función de ordenamiento debe manejar el orden de acuerdo con el tipo de dato.
// Solamente los tipos "string" y "number" deben ser soportados.
'use strict';

let columnas = document.getElementsByTagName('th');
let contenidoTbody = document.querySelector('tbody');

//*miramos que tipo de columna seleccionamos 
for (let cabecera of columnas){
    if (cabecera.getAttribute('data-type') == 'number') {

        //*seleccionamos el primer td que sea hijo de tr con el selector....

        let edadColum = Array.from(document.querySelectorAll('tr td:first-child'));

        //*creamos el evento al hacer click sobre la cabecera ordenando de menor a mayor la edad
        
        cabecera.addEventListener('click', function(){
            edadColum.sort((a, b) => a.textContent - b.textContent);

            for(let td of edadColum){
                contenidoTbody.append(td.parentNode);
            }
        });
    }else{
        //*sino seleccionamos la otra columna que sería el segundo hijo de tr
        let nombreColum = Array.from(document.querySelectorAll('tr td:nth-child(2)'));

        //*ordenamos por orden alfabético
        cabecera.addEventListener('click', function(){
            nombreColum.sort((a, b) => a.textContent.localeCompare(b.textContent));
           
            for(let td of nombreColum){
                contenidoTbody.append(td.parentNode);
            }
        });
    }
}