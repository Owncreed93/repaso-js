'use strict'

// * ARROW FUNCTION --> ( <value1>, <value2>) => { logic }
const suma = (a = 0, b = 0) => { 
    return a + b;
}

const multiplica = a => {
    return a * 5;
}

let resultado = suma(10 , 20)

let total = multiplica(4)

console.log(resultado)

console.log(total)

