'use strict'

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript']

const carrito = [
    {id:1, producto: 'Libro'},
    {id:2, producto: 'Camisa'},
    {id:3, producto: 'Disco'}
]

// AN OBJECT

let automovil = {
    modelo: 'Camaro',
    'motor': 6.0,
    anio: 1967,
    marca: 'Chevrolet'
}

// * REGULAR ITERATION FORM
// for(let i=0; i < pendientes.length; i++){
//     console.log(pendientes[i])
// }

console.log("**********************************")

// * FOR - OF
for(let pendiente of pendientes){
    console.log(pendiente)
}

console.log("**********************************")

for(let producto of carrito){
    console.log(producto)
}

console.log("**********************************")


for( let info of Object.values(automovil) ){
    console.log(info)
}

console.log("**********************************")
console.log("For each function ")
console.log("****************************")
// * FOR EACH <collection>.forEach(<element>)
pendientes.forEach( tarea => { console.log(tarea) } )

console.log("**********************************")
console.log("Map function")
console.log("****************************")
pendientes.map( tarea => { console.log(tarea) } )

// * DIFFERENCE BETWEEN  * //
// * FOR EACH --> RUN THROUGHOUT THE COLLECTION 
// * MAP --> RUN THROUGHOUT THE COLLECTION AND MAKES A COPY OF THE DATA

let nuevoArreglo = pendientes.map( tarea => { return tarea } )
console.log("**********************************")
console.log("Arreglo extraido con la función map")
nuevoArreglo.forEach( elementos => {console.log( `%c ${elementos}`, 'color: #ffaa56;')} )
