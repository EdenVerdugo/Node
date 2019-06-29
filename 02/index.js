const argv = require('./config/yargs').argv
const { base, limite } = argv
const comando = argv._[0]

const { multiplicar } = require('./math/multiply')
const { crearArchivo } = require('./filesystem/archivos')

switch(comando){
    case "crear":        
        crearArchivo(base, limite)
            .then(archivo => console.log(`Se ha creado el archivo ${archivo}`))
            .catch(err => console.log(`error: ${err}`))            
        break;
    case "listar":
        console.log(multiplicar(base, limite))
        break;
    default:
        console.log("comando inválido")
}

