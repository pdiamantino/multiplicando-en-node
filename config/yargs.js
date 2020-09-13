const argv = require('yargs')
    .command('lista', 'Imprime la tabla de multiplicar en consola')
    .option({
        'base': {
            demandOption: true,
            describe: 'base de la multiplicacion',
            alias: 'b'
        },
        'limite': {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}