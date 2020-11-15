import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { ProductoModel } from 'src/app/models/producto.model';



@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url='https://tera-a9670.firebaseio.com'

  constructor(private http:HttpClient) { }

  crearProducto(producto:ProductoModel){
    return this.http.post(`${this.url}/productos.json`,producto)
    .pipe(
           map((resp:any)=>{
           producto.id=resp.name;
           return producto;
})
    );
  }

  actualizarProducto (producto:ProductoModel){

    const productoTemp={
      ...producto
    };

    delete productoTemp.id;

    return this.http.put(`${this.url}/productos/${producto.id}.json`,productoTemp);
  }

  borrarProducto(id:string){
    return this.http.delete(`${this.url}/productos/${id}.json`)
  }


  getProducto(id:string){
    return this.http.get(`${this.url}/productos/${id}.json`)
  }

  getProductos(){
    return this.http.get(`${this.url}/productos.json`)
    .pipe(
      map(this.crearArreglo)
    );
  }
private crearArreglo(productoObj:object){

  const productos: ProductoModel[]=[];

  Object.keys(productoObj).forEach(key=>{
    const producto:ProductoModel=productoObj[key];
    producto.id=key;
    productos.push(producto);
  })

  if(productoObj === null){return[];}
  
  return productos;
}
}
 