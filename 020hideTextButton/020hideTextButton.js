// 020hideTextButton.html/.js: Agrega JavaScript al button para hacer que <div 
//id="text"> desaparezca al hacerle click.

"use strict";

function ocultar(){

    let divTexto = document.getElementById('text');

    divTexto.setAttribute('hidden','true');

}