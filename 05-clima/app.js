const argv = require('./config/argv').argv
const lugar = require('./lugar/lugar')
const { getClima } = require('./clima/clima')

lugar.getLugarLatLong(argv.direccion)
     .then(resp => {
        console.log(resp)
        getClima(resp)
        .then(resp => {
            console.log(resp)
        })
        .catch(err => {
            console.log(err)
        })
     })
     .catch(err => {
        console.log(err)
     })

