// 010purpleExternalLinks.html/.js: Haz todos los enlaces externos de color purple 
// alterando su propiedad style.
// Un link es externo si:
// Su href tiene ://
// Pero no comienza con http://internal.com.

"use strict";

//*Seleccionamos todos los enlaces
let link = document.querySelectorAll('a');

//*Buscamos entre todos y condicionamos

for (let links of link) {

  let href = links.getAttribute('href');
  //* si no tiene el atributo (continue) es como el break, salimos;
  if (!href) continue; 
  
  //* miramos que si es distinto a (://) o empieza por http://internal.com salimos. 
  if (!href.includes('://') || href.startsWith('http://internal.com')) continue; 

  //*Si se cumple las condiciones pintamos las seleccionadas
  links.style.color = 'purple';
}