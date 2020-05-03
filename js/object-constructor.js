'use strict'

// * OBJECT LITERAL --> IS A JAVASCRIPT OBJECT
const persona = {
    nombre: 'Christian',
    edad: 27,
    anioNacimiento: function () { return new Date().getFullYear() - this.edad }
}

console.log(persona)
console.log(`El año de nacimiento de ${persona.nombre} es ${persona.anioNacimiento()}`)

// * OBJECT CONSTRUCTOR
// * OLD VERSION
// function Tarea (nombre, urgencia) {
//     this.nombre = nombre;
//     this.urgencia = urgencia;
// }

// * CURRENT VERSION
class Tarea {
    constructor(nombre, urgencia){
        this.nombre = nombre;
        this.urgencia = urgencia;
    }
    
}

const tarea1 = new Tarea('Aprender Javascript', 'Urgente')
const tarea2 = new Tarea('Preparar café', 'Urgente')
const tarea3 = new Tarea('Pasear al perro', 'Urgente')
const tarea4 = new Tarea('Conocer a mis suegros', '0')

console.log(tarea1)
console.log(tarea2)
console.log(tarea3)
console.log(tarea4)