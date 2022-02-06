const fs = require('fs');

class Archivo {
    constructor(path, nomDB) {
        this.path = path;
        this.nomDB = nomDB;
    }

    nomArchivo() {
        return `${this.path}/${this.nomDB}`;
    }

    leer() {
        const l = {};

        if (fs.existsSync(this.nomArchivo())) {
            const jsn = fs.readFileSync(this.nomArchivo(), { encoding: 'utf-8' });
            const jsnparse = JSON.parse(jsn);
            jsnparse.forEach((e) => { l[e.id] = e; });
        }

        return l;
    }

    guardar(valores) {
        if (!fs.existsSync(this.path)) {
            fs.mkdirSync(this.path);
        }

        fs.writeFileSync(this.nomArchivo(), JSON.stringify(valores), { encoding: 'utf-8' });
        return `${this.nomDB} guardado!`;
    }
}

module.exports = { Archivo };
