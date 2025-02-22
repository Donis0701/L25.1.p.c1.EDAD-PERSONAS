
import cl_mEdad from "./cl_mEdad.js";
export default class cl_mPersona{
    constructor(){
        this.acumEdad = 0;
    }
    procesarEdad(edad){
        this.acumEdad += edad.edad;
    }
    promedioEdad(){
        return this.acumEdad / 6;
    }
} 