const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const opts_crear = {
    descripcion
}

const opts_actualizar = {
    descripcion,
    completado
}

const opts_borrar = {
    descripcion
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts_crear)
    .command('actualizar', 'Actualiza el estado compleado de una tarea', opts_actualizar)
    .command('borrar', 'Elimina una tarea', opts_borrar)
    .help()
    .argv;

module.exports = {
    argv
}