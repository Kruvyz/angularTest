import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { SalesComponent } from './sales/sales.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    FeaturedProductsComponent,
    SalesComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PagesRoutingModule
  ],
  exports: [
    ProductsComponent,
    ProductDetailComponent,
    FeaturedProductsComponent,
    SalesComponent,
    SearchComponent
  ]
})
export class ProductModule { }
