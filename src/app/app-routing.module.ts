import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';

const routes: Routes=[
  { path: 'productos', component: ProductosComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'producto/:id', component: ProductoComponent },
{ path: '**', pathMatch:'full', redirectTo:'productos'},

]


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports:[
RouterModule
  ]
})
export class AppRoutingModule { }
