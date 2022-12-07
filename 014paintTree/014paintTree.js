"use strict";

let container = document.getElementById('container');

let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
  };


function createTree(container, data){

container.innerHTML = createTree(data);
}

createTree(container, data);