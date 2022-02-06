// Referncias
const { Archivo } = require('./helpers/db');
const { Listado } = require('./models/listado');

const tareas = new Listado();
const arch = new Archivo(__dirname.concat('/database'), 'ListaDeTareas.json');

tareas.lista = arch.leer();
console.log('Listado de tareas');
console.log(tareas.listadoCompleto());
