const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer' 
} 
    
const completado = {
    alias: 'c',                    
    default: true,
    desc: 'Marca como completado o pendiente la tarea que hacer'
}

const argv = require('yargs')
            .command('crear', 'Crea una tarea en la lista de tareas', 
            {
                descripcion
            })
            .command('listar', 'Imprime en pantalla la lista de tareas')
            .command('actualizar', 'Actualiza el valor de la tarea', {
                descripcion,
                completado                
            })
            .command('borrar', 'Borra la tarea de la lista de tareas',{ 
                descripcion
            })
            .help()
            .argv

let comando = argv._[0]

module.exports = {
    argv,
    comando
}