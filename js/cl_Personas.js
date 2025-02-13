export default class cl_Persona{
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