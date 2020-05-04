'use strict'

// * DESTRUCTURING OBJECTS  
const cliente = {
    nombre: 'Alejandra',
    tipo: 'Premium',
    datos: {
        ubicacion: {
            ciudad: 'Lima',
            pais: 'Perú'
        },
        cuenta: {
            desde: '10-12-2012',
            saldo: 4000
        }
    },
    gustos: {
        musica: ['pop', 'rock']
    }
}

console.log('This is the object')
console.log(cliente)

// * {property} = object --> property must have the same name as declared in the object
let {nombre, tipo} = cliente
let {datos: {ubicacion} } = cliente
let {datos: {cuenta: {saldo} } } = cliente
let {gustos: musica} = cliente

console.log(`%c This is the attributes ${nombre} y ${tipo} but destructured from the object`, 'color:#218321')
console.log(ubicacion)
console.log(`%c This is the attributes of a property within a property ${ubicacion.ciudad} but destructured from the object`, 'color:#218321')
console.log(`%c This is the attributes of a property within a property ${saldo} but destructured from the object`, 'color:#218321')
console.log(musica)