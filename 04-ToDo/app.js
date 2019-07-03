const {argv, comando} = require('./config/yargs')
const colors = require('colors')
const { crear, listar, actualizar, borrar } = require('./por-hacer/por-hacer')


switch(comando){
    case "listar":
        let listado = listar()
        
        for(let tarea of listado){
            console.log("")
            console.log("============ Por hacer ===========".green)
            console.log(tarea.descripcion.yellow)
            console.log("Estado: ", colors.blue(tarea.completado))
            console.log("==================================".green)
        }

        break;
    case "crear":
            let tarea = crear(argv.descripcion)
            console.log(tarea)
        break;
    case "actualizar":
            let actualizado = actualizar(argv.descripcion, argv.completado)

            if(!actualizado)
                console.log("No se actualizó nada")
            else
                console.log("Se ha actualizado correctamente")
        break;
    case "borrar" : 
        let borrado = borrar(argv.descripcion)

        if(borrado){
            console.log("se ha borrado correctamente")
        }
        else{
            console.log("nada que borrar")
        }
        break;    
    default:
        console.log("comando no válido")
}
