const argv = require('./config/argv').argv
const { getLugarLatLong } = require('./lugar/lugar')
const { getClima } = require('./clima/clima')

const getInfo = async (lugar) => {
    try{
        let latlon = await getLugarLatLong(lugar)
        let clima = await getClima(latlon)
        
        return `El clima de ${ latlon.dir } es de ${ clima }`

    }
    catch(err){
        return 'No se pudo determinar el clima del lugar'
    }    
}

getInfo(argv.direccion)
    .then(r => console.log(r))
    .catch(e => console.log(e))

