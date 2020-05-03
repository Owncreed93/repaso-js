'use strict'

// * FUNCTION DECLARATION
saludar('Juan', 'Desarrollador Web')
saludar('Pedro', 'Médico')
saludar('Alejandra', 'Veterinaria')
saludar('Laura', 'Ingeniera')
saludar()

// * IT WORKS IN ANY PART OF THE CODE, EVEN BEFORE IT IS CREATED
function saludar(nombre = 'Visitante', trabajo = 'No sabemos'){
    console.log(`Hola ${nombre} y su trabajo es ${trabajo}`)
}



// * FUNCTION EXPRESSION
// * IT ONLY WORKS AFTER THE CODE IT IS CREATED
let suma = function(a = 0, b = 0){
    console.log( a + b )
};

suma(10, 20);
suma(5, 20);
suma(-5, 4);
suma();


// * IIFE --> Immediately Invoked Function Expressions
( function(aclaracion){ console.log(aclaracion)})('Cuando uses un IIFE asegurate de colocar ; en la línea anterior');
((tecnologia) => console.log(`AQUI ESTOY APRENDIENDO ${tecnologia}`) )('javascript');


 