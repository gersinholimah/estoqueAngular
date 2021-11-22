import { ProductUpdateComponent } from './components/products/product-update/product-update.component';
import { ProductsCreatComponent } from './components/products/products-creat/products-creat.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";


//originalmente é assim como abaixo
//const routes: Routes = [];

const routes: Routes = [
  {
  //rota raiz
  path: "",
  component: HomeComponent
},  {
  path: "products",
  component: ProductCrudComponent
}, {
  path: "products/creat",
  component: ProductsCreatComponent
}, {
  path: "products/update/:id", //rota de update de produto
  component: ProductUpdateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
