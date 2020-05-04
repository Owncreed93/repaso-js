'use strict'

// * API REST USED
// https://restcountries.eu/#api-endpoints-all

descargarPaises('republic')

// * FETCH API
function descargarPaises(cantidad){
    const api = `https://restcountries.eu/rest/v2/name/${cantidad}`

    // * CALLING FETCH
    fetch(api)
        .then( respuesta => respuesta.json() )
        .then( datos => imprimirHTML( datos) )
}

function imprimirHTML(datos){
    datos.forEach(country => {
        console.log(country)
        const li = document.createElement('li')

        const { name, region, subregion, flag } = country

        li.innerHTML = `
            Name : ${name}
            Region: ${region}
            Subregion: ${subregion}
            Flag: <img src="${flag}" alt="${name}" width="40px" />
        `

        document.querySelector('#app').appendChild(li)
    });
}