import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  }
];

@NgModule({
  exports: [ RouterModule ],

  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
