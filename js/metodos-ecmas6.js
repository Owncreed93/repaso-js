'use strict'

// * FUNCTIONS IN ECMA SCRIPT 6
const personas = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'Pablo', edad: 50 },
    { nombre: 'Alejandra', edad: 23, aprendiendo: 'Javascript' },
    { nombre: 'Karen', edad: 28 },
    { nombre: 'Miguel', edad: 33 },
]

console.table(personas)

// * FILTER
// * <collection>.filter( <element> => { //logic })
// * RUNS THROUGHT A COLLECTION OF ELEMENTS AND SEARCH FOR A CONDITION
const mayores = personas.filter( persona => { return persona.edad > 25 })

console.log(mayores)

// * FIND
// * <collection>.filter( <element> => { <element>.<property> === <value> })
// * RUNS THROUGHT A COLLECTION OF ELEMENTS AND SEARCH FOR A EQUAL MATCH
const alejandra = personas.find( persona => persona.nombre === 'Alejandra')
console.log(alejandra)

// * REDUCE
// * <collection>.reduce ( (accumulator, <element>) => { // logic }, <accumulator_start>)
// * ACCUMULATES A VALUE BASE ON A PARAMETER YOU WANT TO MEASSURE
let total = personas.reduce( (edadTotal, persona) => {
    return edadTotal + persona.edad
}, 0 )

console.log(total)