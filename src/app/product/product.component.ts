import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api/api.service';
import { Product } from '../shared/types/product';
import { CartService } from '../shared/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product: Product;

  constructor(private apiService: ApiService, private cartService: CartService) { }

  ngOnInit() {
    this.getProduct(1);
  }

  getProduct(id: number): void {
    this.apiService.getProductDetail(id)
      .subscribe(product => {
        this.product = product;
      })
  }

  addItemInCart(): void {
    this.cartService.addItem(this.product);
  }
  

}