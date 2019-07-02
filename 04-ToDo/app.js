const {argv, comando} = require('./config/yargs')
const { crear } = require('./por-hacer/por-hacer')


switch(comando){
    case "listar":
        console.log("listar todas las tareas")
        break;
    case "crear":
            let tarea = crear(argv.descripcion)
            console.log(tarea)
        break;
    case "actualizar":
            console.log("actualiza la tarea")
        break;
    default:
        console.log("comando no válido")
}
