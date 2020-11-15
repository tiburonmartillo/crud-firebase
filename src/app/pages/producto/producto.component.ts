import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto = new ProductoModel();

  constructor(private productosServices: ProductoService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id');

    if (id!== 'nuevo'){
      this.productosServices.getProducto(id)
      .subscribe((resp:ProductoModel)=>{
        this.producto=resp;
        this.producto.id=id;
      });
    }
  }
guardar(form:NgForm){

  if(form.invalid){
    console.log('formulario no valido');
    return;
  }

  Swal.fire({
    icon:'info',
    title:'Espere',
    text:'Guardando imformación',
    allowOutsideClick:false
  });
  Swal.showLoading();

  let peticion: Observable<any>;

if(this.producto.id){
  peticion = this.productosServices.actualizarProducto(this.producto);
}else{

 peticion= this.productosServices.crearProducto(this.producto);
}
peticion.subscribe(resp=>{
  Swal.fire({
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  });
});
}
}
