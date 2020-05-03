const nombre = "Christian"
const edad = 27
const booleano = true
let indefinido
const nulo = null
const arreglo = ['HTML', 'CSS', 'JS']
const  objeto = {
    nombre: 'Papu',
    habilidad: 'Mujeriego',
}

const fecha = new Date()

//* DATA TYPE
// * STRING
if (typeof(nombre) == 'string'){
    console.log(typeof(nombre))
    console.log('Esto es un string pe bandido!!')
    console.log('**********************************')
}

// * NUMBER
if (typeof(edad) == 'number'){
    console.log(typeof(edad))
    console.log('Esto es un number pe bandido!!')
    console.log('**********************************')
}

// * BOOLEAN
if (typeof(booleano) == 'boolean'){
    console.log(typeof(booleano))
    console.log('Esto es un boolean pe bandido!!')
    console.log('**********************************')
}

// * UNDEFINED
if (typeof(indefinido) == 'undefined'){
    console.log(typeof(indefinido))
    console.log('Esto es un undefined pe bandido!!')
    console.log('**********************************')
}

// * NULL, ARRAY, DATE, OBJECT --> OBJECT
if (typeof(nulo) == 'object'){
    console.log(typeof(nulo))
    console.log('Esto es un objeto pe bandido!!')
    console.log('**********************************')
}

if (typeof(arreglo) == 'object'){
    console.log(typeof(arreglo))
    console.log('Esto es un objeto pe bandido!!')
    console.log('**********************************')
}

if (typeof(objeto) == 'object'){
    console.log(typeof(objeto))
    console.log('Esto es un objeto pe bandido!!')
    console.log('**********************************')
}

if (typeof(fecha) == 'object'){
    console.log(typeof(fecha))
    console.log('Esto es un objeto pe bandido!!')
    console.log('**********************************')
}

console.log(typeof fecha)