// 028imageGallery.html/.js:Crea una galería de imágenes donde la imagen principal 
// cambia al hacer clic en una miniatura. Como en Amazon, por ejemplo.
'use strict';

function galeria(element, src)
{
    element = seleccion(element);
    element.src = src;
}

function seleccion(element)
{
    return document.getElementById(element);
}

