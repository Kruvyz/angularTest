import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { PageWraperComponent } from './page-wraper/page-wraper.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ProductModule } from '../product/product.module';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    ProductsComponent,
    PageWraperComponent,
    ProductDetailComponent,
    HomeComponent,
    CartComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ProductModule
  ],
  exports: [
    PageWraperComponent
  ]
})
export class PagesModule { }
