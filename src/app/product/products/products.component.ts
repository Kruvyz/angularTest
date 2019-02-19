import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product';
import { ProductService } from '../product.service';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
      })
  }

  addItemInCart(id: number): void {
    this.cartService.addItem(this.products[id]);
  }

}
