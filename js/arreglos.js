'use strict'


// * NUMERIC ARRAY
const numeros = [10, 20, 30, 40, 50]
const frutas = ["Pera", "Manzana", "Plátano", "Mandarina", "Zandía"]

console.log(numeros)
console.table(numeros)

// * STRING ARRAY
const meses = new Array('enero', 'febrero', 'marzo', 'abril')

console.log(meses)

// * EVERY TYPE OF VARIABLE
const variado = [ 'Hola', 10, true, "si", null,  undefined]

console.table(variado)

// * VERIFYING AN ARRAY
// * Array.isArray(<array>) --> True if is an array

let es_array = Array.isArray(numeros)

console.log(es_array)

// * ADD NEW ELEMENTS TO AN ARRAY AT THE END
meses.push('mayo')
console.log(meses)

// * ADD NEW ELEMENTS AT THE BEGINNING
meses.unshift('mes 0')
console.log(meses)

// * DELETE THE LAST ELEMENT
meses.pop()
console.log(meses)

// * DELETE AN ELEMENT AT THE START
meses.shift()
console.log(meses)

// * <array>.splice(<where_start_to_delete>, <how_many_elements_to_delete>) -->DELETE A RANGE OF ELEMENTS
meses.splice(0, 2)
console.log(meses)

// * REVERSE ARRAY ORDER
meses.reverse()
console.log(meses)

// * SORT AN ARRAY
frutas.sort()
console.log(frutas)