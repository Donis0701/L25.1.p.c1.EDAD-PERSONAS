/*3. Conociendo la edad de varias personas, indicar la edad promedio.*/

import cl_mPersona from "./cl_mPersona.js";
import cl_vPersona from "./cl_vPersona.js";
import cl_controlador from "./cl_controlador.js";

export default class cl_principal {
    constructor(){
        let vista = new cl_vPersona();
        let modelo = new cl_mPersona();
        let controlador = new cl_controlador(modelo,vista);
        vista.controlador = controlador;
    }
}
