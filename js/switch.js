'use strict'

const metodoPago = 'cheque'

switch(metodoPago){
    case 'cheque':
        pagoCheque()
        break
    case 'efectivo':
        console.log(`Pagaste con método ${metodoPago}.`)
        break
    case 'tarjeta':
        console.log(`Pagaste con método ${metodoPago} espere un momento...`)
        break
    default:
        console.log(`Aún no has pagado o método de pago no válido`)
        break
}

function pagoCheque(){
    console.log(`Pagaste con método ${metodoPago} revisaremos que tenga fondos.`)
}


