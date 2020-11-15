import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ProductoModel } from '../../models/producto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:ProductoModel[]=[];

  cargando=false;

  constructor(private ProductoService:ProductoService ) { }

  ngOnInit(): void {

    this.cargando=true;
    this.ProductoService.getProductos()
    .subscribe(resp=>
      {this.productos=resp;
      this.cargando=false});
  }


  borrarProducto(producto:ProductoModel, i:number){

  Swal.fire({
    title:'¿Estás seguro?',
    text:`Estás seguro que desea borrar a ${producto.nombre}`,
    icon:"question",
    showCancelButton:true,
    showConfirmButton:true
  }).then(resp=>{
    if(resp.value){
      
          this.productos.splice(i,1);
          this.ProductoService.borrarProducto(producto.id).subscribe();

    }
  });

  }
}
