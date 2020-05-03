'use strict'

const musica = {
    // * Methods
    reproducir: function(cancion){
        console.log(`Reproduciendo la canción: ${cancion}`)
    },

    pausar: () => console.log('Pausado')
}

musica.borrar = (id) => { console.log(`Borrando la canción con id ${id}`) }


musica.reproducir('Hotal california')
musica.pausar()
musica.reproducir('Noting else matters')
musica.borrar(121)

