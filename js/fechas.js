'use strict'

// * GET CURRENT DAY
const diaHoy = new Date()

const semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Viernes', 'Sábado']

const meses = ['Enero', 
            'Febrero', 
            'Marzo', 
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Setiembre',
            'Octubre',
            'Noviembre',
            'Diciembre'
]

// * FORMAT IS new Date ('YEAR, MONTH, DAY')
const unDia = new Date(1993, 3, 16)

let diaNa = unDia.getDate()

// * DATE'S GETTERS * // 
let valor = diaHoy

// * GET MONTH NUMBER
let mes = diaHoy.getMonth()

// * GET DAY NUMBER IN THE WEEK
let diaSemana = diaHoy.getDay()

// * GET DAY NUMBER IN THE MONTH
let diaMes = diaHoy.getDate()

// * GET THE CURRENT YEAR
let anio = diaHoy.getFullYear()

// * GET THE CURRENT MINUTES
let minutes = diaHoy.getMinutes()

// * GET CURRENT HOUR
let hour = diaHoy.getHours()

// * GET TIMESTAMP
let stamp = diaHoy.getTime()

console.log(`Estamos en el mes ${meses[mes]} y su número de orden es ${mes} porque está en un array.`)
console.log(`Estamos en el dia ${semana[diaSemana]} y su número de día en la semana es ${diaSemana}.`)
console.log(`Estamos en el día ${diaMes} del mes.`)
console.log(`El año actual es ${anio}.`)
console.log(`El minuto actual es ${minutes}`)
console.log(`La hora actual es ${hour}`)
console.log(`Esto es el timestamp ${stamp}`)

// * DATE SETTERS * //
let changeYear = diaHoy.getFullYear()

changeYear = diaHoy.setFullYear(1998)

changeYear = diaHoy.getFullYear()

console.log(`Este es el año cambio con un get ${changeYear}`)

console.log(`Este es mi dia de nacimiento ${diaNa}`)