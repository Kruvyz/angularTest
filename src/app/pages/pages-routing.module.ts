import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', children: [
      { path: 'home', component: HomeComponent },
      { path: 'cart', component: CartComponent },
      { path: 'cart', component: CartComponent },
      { path: 'products', children: [
        { path: '', component: ProductsComponent },
        { path: ':id', component: ProductDetailComponent }
      ]},      
  ]},
  { path: '', redirectTo: '/home', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
