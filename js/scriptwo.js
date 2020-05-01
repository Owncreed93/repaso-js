
let banda = 'Metálica', cancion = 'Enter SandMan'

let pista;

pista = `${banda} : ${cancion}`

// * CONCATENATE A STRINGS
comentario = pista.concat(" ", " y es genial")

console.log(banda.length)
console.log(comentario)

// * TO LOWER CASE
mayuscula = banda.toUpperCase()
console.log(mayuscula)

// * TO UPPER CASE
minuscula = comentario.toLowerCase()
console.log(minuscula)

// * SPLIT
let expression = 'I am learning new tricks now that I am free!!!!!'
divide = expression.split(' ')
console.log(divide)

let expresionTwo = 'Read, write, think, train, be happy'
divideTwo = expresionTwo.split(', ')
console.log(divideTwo)

// * REPLACE('what it is', 'what to replace') --> Change 
let actividad = 'Estoy aprendiendo JavaScript con el curso'

changeValue = actividad.replace('JavaScript', 'Js')

console.log(changeValue)

// * INCLUDES('what you are looking for')
let email = 'christiantarifer@gmail.com'

search = email.includes('@')

console.log(search)

// * REPEAT()
let master = 'Master ', puppets = 'Of puppets'
    console.log(master.repeat(3))
    console.log(puppets)
