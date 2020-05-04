'use strict'

// * SCOPE
// * HOW DO YOU USE A VARIABLE IN THE CODE
var musica = 'Rock'

if(musica){
    let musica = 'Grunge'
    console.log(`%c Dentro del if: ${musica}`, 'color: #9c0800')
}

console.log(`%c Fuera del if: ${musica}`, 'color: #36515b')