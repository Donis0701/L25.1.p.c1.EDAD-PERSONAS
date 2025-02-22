export default class cl_controlador {
    constructor(modelo,vista){
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarEdad(){
        this.modelo.procesarEdad(this.vista.procesarEdad());
        this.vista.reportarEdad(this.modelo.promedioEdad());
    }
}