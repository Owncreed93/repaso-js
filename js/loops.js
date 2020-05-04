'use strict'

const carrito = ['producto 1', 'producto 2', 'producto 3']

console.log(carrito.length)

// * For loop
for(let i = 0; i < carrito.length; i++){
    console.log(`Producto en el carrito: ${carrito[i]}`)
}

// * While loop
let i = 0
while (i < carrito.length){
    console.log(`Producto en el carrito: ${carrito[i]}`)
    i++
}

let j = 0
// * Do while
do {
    console.log(j)
    j++
}while(j<10)