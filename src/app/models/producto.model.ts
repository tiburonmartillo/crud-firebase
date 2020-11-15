export class ProductoModel{
    id:string;
    nombre:string;
    aroma:string;
    descrip:string;
    contenido:number;
    disp:boolean;

    constructor(){
        this.disp=true;
    }
}