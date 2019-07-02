const argv = require('yargs')
            .command('crear', 'Crea una tarea en la lista de tareas', 
            {
                descripcion : {
                    alias: 'd',
                    demand: true,
                    desc: 'Descripcion de la tarea por hacer' 
                }
            })
            .command('listar', 'Imprime en pantalla la lista de tareas')
            .command('actualizar', 'Actualiza el valor de la tarea', {
                descripcion: {
                    alias: 'd',
                    demand: true,
                    desc: 'Descripcion de la tarea por hacer' 
                },
                completado: {
                    alias: 'c',                    
                    default: true,
                    desc: 'Marca como completado o pendiente la tarea que hacer'
                }
            })
            .help()
            .argv

let comando = argv._[0]

module.exports = {
    argv,
    comando
}