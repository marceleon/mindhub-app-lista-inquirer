// Referncias
const { Tarea } = require('./models/tarea');
const { Listado } = require('./models/listado');

const t = new Tarea('Tarea UNO');

console.log('Tarea:');
console.log(t);

const lst = new Listado();

lst.agregarTarea('Tarea DOS');
lst.agregarTarea('Tarea TRES');

console.log('-----------------');
console.log('Listado de Tareas');
console.log(lst);
console.log(lst.lista);
