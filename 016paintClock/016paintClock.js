// 016paintClock.html/.js: Reloj coloreado con setInterval
// Crea un reloj coloreado como aquí: 
// Usa HTML/CSS para el estilo, JavaScript solamente actualiza la hora en elements.
"use strict";
function actualizar() {

    let reloj = document.getElementById('reloj');

    //? creamos el objeto con el que sacaremos la hora, minutos y segundos
    let datos = new Date(); 

    let hora = datos.getHours();
    let min = datos.getMinutes();
    let seg = datos.getSeconds();

    //? si la hora es menor a 10 añadimos un 0 delante para seguir el formato hh:mm:ss
    if (hora < 10){

        hora = '0' + hora;
    }
        //?añadimos al primer hijo del div la hora
        reloj.children[0].innerHTML = hora;
    
    
   //? si los minutos son menor a 10 añadimos un 0 delante para seguir el formato hh:mm:ss
    if (min < 10){
        
        min = '0' + min;
    }
        //?añadimos al segundo hijo del div los minutos
        reloj.children[1].innerHTML = min;
     
   
  
    //? si los segundos son menor a 10 añadimos un 0 delante para seguir el formato hh:mm:ss
    if (seg < 10){

        seg = '0' + seg;
    } 
        //?añadimos al tercer hijo del div los segundos
        reloj.children[2].innerHTML = seg;
    
  }

  let intervalo;

  function start() {

    if (!intervalo) {
        intervalo = setInterval(actualizar, 1000);
    }
     //? inicia directamente, no espera hasta el primer intervalo
    actualizar();
  }

  function stopReloj() {
    clearInterval(intervalo);
    //?borra intervalo indicando que el reloj ha sido detenido
    intervalo = null; 
  }