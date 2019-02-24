import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product';
import { ProductService } from '../product.service';
import { CartService } from 'src/app/core/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products$: Observable<Product[]>;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.products$ = this.productService.getProducts();
  }

  addItemInCart(id: number): void {
    this.cartService.addItem(id);
  }

}
