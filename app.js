// Referncias
const {
    pedirOpcion, pausar, ingresarTxt, seleccionar, seleccionarVarios, confirmar,
} = require('./helpers/inquirer');
const { Archivo } = require('./helpers/db');
const { Listado } = require('./models/listado');

// Funciones

const main = async () => {
    console.log('Hola Mudo');

    const tareas = new Listado();
    const arch = new Archivo(__dirname.concat('/database'), 'ListaDeTareas.txt');

    // Recupero info guardada
    tareas.lista = arch.leer();

    let op = 0;
    let msg = '';
    let conf = false;

    do {
        console.clear();
        msg = '';
        op = await pedirOpcion();

        switch (op) {
        case 1: {
            const txt = (await ingresarTxt('Descripción de la tarea:')).trim();
            if (txt.length > 0) {
                tareas.agregarTarea(txt);
                msg = 'Nueva tarea CREADA';
            }
            break;
        }
        case 2:
            if (tareas.hayTareas()) { console.log(tareas.listadoCompleto()); } else { msg = 'SIN tareas en la lista!'; }
            break;
        case 3:
            console.log(tareas.listadoPendienteCompletado());
            break;
        case 4:
            console.log(tareas.listadoPendienteCompletado(false));
            break;
        case 5: {
            const ids = await seleccionarVarios('Tarea a Finalizar', tareas.lisaParaSeleccion(true));
            conf = await confirmar('Confirma?');
            if (conf) {
                tareas.actualizarStatus(ids);
                msg = 'Tareas Actualizadas';
            }
            break;
        }
        case 6: {
            const id = await seleccionar('Tarea a Borrar', tareas.lisaParaSeleccion());
            conf = await confirmar('Confirma?');
            if (conf) {
                if (tareas.eliminarTarea(id)) msg = 'Tarea ELIMINADA';
                else msg = 'ATENCION!! NO se encuentra la tarea';
            }
            break;
        }
        default:
        }

        if (op !== 0) { await pausar(msg); }
    } while (op !== 0);

    msg = await arch.guardar(tareas.listarArr());
    await pausar(msg);

    console.log('Bye!');
};

// Principal
main();
