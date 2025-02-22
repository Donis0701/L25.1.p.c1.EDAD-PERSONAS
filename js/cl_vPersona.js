import cl_mEdad from "./cl_mEdad.js";
import cl_vEdad from "./cl_vEdad.js";

export default class cl_vPersona{
    constructor(){
        this.controlador = null;
        this.lblpromedioEdad = document.getElementById("mainFormlblpromedioEdad");
        this.vEdad = new cl_vEdad();
        this.vEdad.btProcesar.onclick= () => this.controlador.procesarEdad();
    }
    procesarEdad(){
        this.mEdad = new cl_mEdad({
            edad: this.vEdad.edad
        });
        return this.mEdad;
    }
    reportarEdad(promedio){
        this.lblpromedioEdad.innerHTML =`La edad promedio es: ${promedio}<br>`;
    }
}