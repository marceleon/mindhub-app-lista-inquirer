const inq = require('inquirer');
const colors = require('colors');

const opciones = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Seleccione opción',
        choices: [
            { value: 1, name: 'Crear Tarea' },
            { value: 2, name: 'Listar Tareas' },
            { value: 3, name: 'Listar Tareas Completadas' },
            { value: 4, name: 'Listar Tareas Pendientes' },
            { value: 5, name: 'Completar Tareas' },
            new inq.Separator(),
            { value: 6, name: 'Borrar Tarea' },
            new inq.Separator(),
            { value: 0, name: 'Salir' },
            new inq.Separator(),
        ],
        pageSize: 10,
        loop: false,
    },
];

const pedirOpcion = async () => {
    const { opcion } = await inq.prompt(opciones);
    return opcion;
};

const pausar = async (texto = '') => {
    await inq.prompt([{
        type: 'input',
        name: 'Enter',
        message: `${texto.length > 0 ? `${texto}.` : ''}Presione ${colors.bgBlue(' ENTER ')} para continuar...`,
    },
    ]);
};

const ingresarTxt = async (msg) => {
    const { ingreso } = await inq.prompt([{
        type: 'input',
        name: 'ingreso',
        message: msg,
        validate(v) {
            if (v.length === 0) return 'Por favor ingrese un valor';
            return true;
        },
    },
    ]);

    return ingreso;
};

const seleccionar = async (msg, tareas) => {
    const { selec } = await inq.prompt([{
        type: 'list',
        name: 'selec',
        message: msg,
        choices: tareas,
    },
    ]);

    return selec;
};

const seleccionarVarios = async (msg, tareas) => {
    const { selec } = await inq.prompt([{
        type: 'checkbox',
        name: 'selec',
        message: msg,
        choices: tareas,
    },
    ]);

    return selec;
};

const confirmar = async (msg) => {
    const { conf } = await inq.prompt([{
        type: 'confirm',
        name: 'conf',
        message: msg,
        default: false,
    },
    ]);

    return conf;
};

module.exports = {
    pedirOpcion, pausar, ingresarTxt, seleccionar, seleccionarVarios, confirmar,
};
