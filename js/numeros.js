const numeroUno = 30,
      numeroDos = "20",
      numeroTres = 20.20,
      numeroCuatro = -3,
      numeroCinco = 20

console.log(numeroUno)

concatenacion = numeroUno + numeroDos
raro = numeroUno - numeroDos
suma = numeroUno + numeroTres
resta = numeroUno - numeroCinco
multiplicacion = numeroCuatro * numeroCinco
division = numeroUno / numeroTres

console.log(`Si sumas numero y string se concatena: ${concatenacion}`)
console.log(`Si resta un numero de un string pasa eso: ${raro}`)
console.log(`Suma : ${suma}`)
console.log(`Resta : ${resta}`)
console.log(`Multiplicación : ${multiplicacion}`)
console.log(`División : ${division}`)
console.log("***************************************************")

// * MATH
// * ROUND
redondeo = Math.round(division)
// * FLOOR
redondeo_defecto = Math.floor(division)
// * CEIL
redondeo_exceso = Math.ceil(division)
// * SQRT
raiz = Math.sqrt(numeroCinco)
// * ABSOLUTE NUMBER
abosulte = Math.abs(numeroCuatro)
// * POW
eleva = Math.pow(numeroCuatro, 3)

console.log(`El redondeo de ${division} es ${redondeo}.`)
console.log(`El redondeo por defecto de ${division} es ${redondeo_defecto}.`)
console.log(`El redondeo por exceso de ${division} es ${redondeo_exceso}.`)
console.log(`La raíz cuadrada de ${numeroCinco} es ${raiz}.`)
console.log(`El número absoluto de ${numeroCuatro} es ${abosulte}`)
console.log(`El número ${numeroCuatro} elevado a 3 es ${eleva}`)


// * INCREMENTS
let puntaje = 0

// * SAVE AND INCREMENT
console.log(`Este guarda el valor y luego incrementa ${puntaje}`)
puntaje++
console.log(`Ves? : ${puntaje} `)
console.log(`Esto primero graba y luego lo guarda, ves? ${++puntaje}`)