const { v4: generaID } = require('uuid');

class Tarea {
    id = '';

    desc = '';

    completadoEn = null;

    constructor(d) {
        this.id = generaID();
        this.desc = d;
    }

    mostrar() {
        return `${this.desc} ::${(this.completadoEn) ? 'Completada' : 'Pendiente'}`;
    }
}

module.exports = { Tarea };
