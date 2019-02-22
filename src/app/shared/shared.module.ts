import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
