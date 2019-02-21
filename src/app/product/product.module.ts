import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PagesRoutingModule } from '../pages/pages-routing.module';

@NgModule({
  declarations: [
    ProductsComponent, 
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PagesRoutingModule
  ],
  exports: [
    ProductsComponent, 
    ProductDetailComponent
  ]
})
export class ProductModule { }
