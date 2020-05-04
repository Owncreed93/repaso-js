'use strict'

let puntaje = 1000
const logueado = true
const edad = 20
let dinero = 100
let totalCarrito = 300
let tarjeta = true
let hora = 8

if (puntaje === 1000){
    console.log('Si es igual')
} else {
    console.log('No es igual')
}

if(edad > 18){
    console.log('Si eres mayor de edad')
} else {
    console.log('No eres mayor de edad')
}

// * IF, ELSE IF, ELSE
if( dinero > totalCarrito){
    console.log('Pago correcto')
} else if (tarjeta){
    console.log('Pago con tarjeta')
} else {
    console.log('Monto insuficiente')
}

// * OR
if(dinero > totalCarrito || tarjeta){
    console.log('Pago Correcto')
} else {
    console.log('Fondos Insuficientes')
}

// * AND
if(hora> 0 && hora <= 12)

if(hora > 0 && hora <= 12){
    console.log('Buenos dias')
} else if (hora > 12 && hora <= 18) {
    console.log('Buenas tardes')
} else if (hora > 18 && hora<= 24){
    console.log('Buenas noches')
} else {
    console.log('Horario no valido')
}

// * TERNARIO --> (sentence) ? (valid scenario) : (invalid scenario)
console.log( logueado ? 'Si está logeado' : 'No está logueado' )