'use strict'

// * OBJECTS LITERAL
const persona = {
    nombre: 'Christian',
    apellido: 'Tarifeño',
    edad: 27,
    trabajo: false,
    musica: ['Trance', 'Rock', 'Grunge'],
    hogar: {
        ciudad: 'Lima',
        pais: 'Perú'
    }
}

console.log(persona)
console.log(persona.nombre)
console.log(persona.musica[1])
console.log(persona['hogar']['ciudad'])