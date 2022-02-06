// Referncias
const { Listado } = require('./models/listado');

const lst = new Listado();

lst.agregarTarea('Tarea UNO');
lst.agregarTarea('Tarea DOS');

console.log('-----------------');
console.log('Listado de Tareas');
console.log(lst.lista);
console.log('-----------------');
console.log('Listado de Tareas en formato Array');
console.log(lst.listarArr());
