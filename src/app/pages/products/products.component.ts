import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product';

@Component({
  selector: 'pages-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[];

  constructor() { }

  ngOnInit() {
  }
}
