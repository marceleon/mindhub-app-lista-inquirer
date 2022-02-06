const colors = require('colors');
const {Tarea} =require('./tarea');

class Listado {

    lista={};

    agregarTarea(txt){
        let t=new Tarea(txt);
        this.lista[t.id]=t;
    };

    eliminarTarea(id){
        if (this.lista.hasOwnProperty(id)) {
            delete this.lista[id];
            return true;
        } else {
            return false;
        }
    }

    hayTareas(){
        return (Object.keys(this.lista).length>0);
    }

    listarTareas(){
        return this.lista;
    }

    listarArr(){
        return Object.values(this.lista);
    }

    actualizarStatus(ids) {
        let claves=Object.keys(this.lista);
        claves.forEach( e => {

            let t=this.lista[e];
            if (ids.indexOf(t.id)==-1 && (t.completadoEn)) {
                t.completadoEn=null;
            } else 
                if (ids.indexOf(t.id)>=0 && (!t.completadoEn)) {
                    t.completadoEn=(new Date()).toISOString();
                }
        });
    }

    listadoGenerico(trs) {
        let i=0;
        return trs.map( e => {
            let t=this.lista[e];
            return `${++i}.${t.desc} :: ${(t.completadoEn)?colors.green('Completada'):colors.yellow('Pendiente')}\n`;}
            ).join('');
    }

    listadoCompleto(){
        let claves=Object.keys(this.lista);
        return this.listadoGenerico(claves);
    }

    listadoPendienteCompletado(estado=true) {
        let claves=Object.keys(this.lista).filter( e => {
            let t=this.lista[e];
            return ( (!t.completadoEn && !estado) || (t.completadoEn && estado));
        });
        return this.listadoGenerico(claves);
    }

    lisaParaSeleccion(chk=false) {
        let i=0;
        return Object.keys(this.lista).map( e => {
            let t=this.lista[e];
            let r={ value: t.id, name: `${++i}. ${t.desc}`};

            if (chk) 
                r.checked=t.completadoEn?true:false;
            
            return r;
        });
    }

};

module.exports = {Listado};
