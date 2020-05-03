'use strict'

const nombre = 'Christian',
      trabajo = 'Desarrollador Web';

// * STANDART FORM
console.log('Nombre :' +nombre +', Trabajo : ' +trabajo);

// * TEMPLATE LITERAL FORM
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

var contenedorApp = document.querySelector("#mensaje")

console.log(contenedorApp)

// * STANDART FORM
let html = '<ul>' +
               '<li> Nombre: ' +nombre +'</li>' +
               '<li> Trabajo: ' +trabajo +'</li>' +
           '</ul>'


let html2 = `<ul>
<li> Nombre:  ${nombre} </li>
<li> Trabajo: ${trabajo} </li>
</ul>`
contenedorApp.innerHTML = html2