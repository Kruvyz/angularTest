import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/entities/product';
import { ProductService } from '../product.service';
import { mergeMap, toArray, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  public sales$: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getSales();
  }

  getSales() {
    this.sales$ = this.productService.getProducts().pipe(
      map(prod => prod.slice(0, 4))
    );
  }

}
