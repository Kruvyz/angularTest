import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product';
import { ProductService } from '../product.service';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product: Product;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.getProduct(1);
  }

  getProduct(id: number): void {
    this.productService.getProductDetail(id)
      .subscribe(product => {
        this.product = product;
      })
  }

  addItemInCart(): void {
    this.cartService.addItem(this.product);
  }
}
