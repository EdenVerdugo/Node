const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv  = require('yargs')
                .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
                .command('crear', 'Crea un archivo de texto con los resultados de multiplicar la base', opts)
                .help()
                .argv

let comando = argv._[0]

module.exports = {
    argv,
    comando
}                