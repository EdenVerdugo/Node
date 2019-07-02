const colors = require('colors')
const argv = require('./config/yargs').argv
const { base, limite } = argv
const comando = argv._[0]

const { multiplicar } = require('./math/multiply')
const { crearArchivo } = require('./filesystem/archivos')

let centrar = (texto, longitud) => {
    if(texto.length > longitud) 
        texto = texto.substr(0, longitud)

    let len = texto.length
    let rest = Math.floor((longitud - len) / 2)
        
    for(let i = 0; i < rest; i++){
        texto = " " + texto
    }

    return texto    
}

switch(comando){
    case "crear":        
        crearArchivo(base, limite)
            .then(archivo => console.log(`Se ha creado el archivo`, `${archivo}`.yellow))
            .catch(err => console.log(`error: ${err}`))            
        break;
    case "listar":
        console.log("========================================".green)
        console.log(centrar(`TABLA DE ${base}`,40).yellow)
        console.log("========================================".green)
        console.log(multiplicar(base, limite))
        break;
    default:
        console.log("comando inválido")
}

