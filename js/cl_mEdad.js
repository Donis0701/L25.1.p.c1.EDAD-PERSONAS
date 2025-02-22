export default class cl_mEdad{
    constructor({edad}){
        this.edad = edad;
    }
    set edad(e){
        this._edad = +e;
    }
    get edad(){
        return this._edad;
    }
}