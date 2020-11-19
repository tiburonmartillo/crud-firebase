import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ProductoModel } from '../../models/producto.model';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos:ProductoModel[]=[];

  cargando=false;

  apiWhats='https://api.whatsapp.com/send?phone=524493346095&text=';


  constructor(private ProductoService:ProductoService ) { }

  
  ngOnInit(): void {

    this.cargando=true;
    this.ProductoService.getProductos()
    .subscribe(resp=>
      {this.productos=resp;
      this.cargando=false});
  }

}
