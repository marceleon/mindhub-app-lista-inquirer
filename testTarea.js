let {Tarea}=require('./models/tarea');
let {Listado}=require('./models/listado');


let t1=new Tarea('Nueva TAREA');
let t2=new Tarea('Otra TAREA');
console.log(t1);
console.log(t2);

let tareas=new Listado();

tareas.lista[t1.id]=t1;
tareas.lista[t2.id]=t2;

console.log('.............');
console.log(tareas);
console.log('.............');
console.log(tareas.lista);
console.log('.............');
console.log(Object.keys(tareas.lista));


