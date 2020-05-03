let numeroUno = 50,
      numeroDos = "10",
      numeroTres = "tres",
      numeroCuatro = "20.20"

console.log(numeroUno + numeroDos)

// * Number() --> TRANSFORM A NUMBER IN STRING TYPE TO A NUMBER TYPE
console.log( numeroUno + Number(numeroDos))

// * parseInt() --> TRANSFORMS A NUMBER IN STRING TO A INTEGER TYPE
console.log( parseInt(numeroCuatro) + numeroUno )

// * parseFloat() --> TRANSFORMS A NUMBER IN STRING TO A FLOAT TYPE
console.log( parseFloat(numeroCuatro) + numeroUno)

try {
    console.log(parseInt(numeroTres))
}
catch(err) {
    console.log(err.message)
}

let dato, dato1, dato2, dato3, dato4, dato5, dato6, dato7, dato8

dato = Number("20")
dato1 = Number("-20.20")
dato2 = Number(true) // *  --> true transforms in 1 
dato3 = Number(false) // * --> false transforms in 0
dato4 = Number(null) // * --> null transforms in 0
dato5 = Number("Hola Mundo") // * --> null transforms in NaN
dato6 = Number([1,2,3,4,5]) // * -->  array transforms in NaN

console.log(dato)
console.log(dato1)
console.log(dato2)
console.log(dato3)
console.log(dato4)
console.log(dato5)
console.log(dato6)


// * <number>.toFixed(<number_of_decimals>)
numeroCinco = "1010200323.23409240293"
numeroSeis = 1010200323.23409240293

console.log(Number(numeroCinco).toFixed(4))
console.log(numeroSeis.toFixed(4))