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

export class FileItem{
    archivo:File;
    nombreArchivo:string;
    url:string;
    estaSubiendo:boolean;
    progreso:number;

    constructor(archivo:File){
this.archivo=archivo;
this.nombreArchivo=archivo.name;

this.estaSubiendo=false;
this.progreso=0;
    }
}