import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/types/product';
import { ApiService } from '../shared/services/api/api.service';
import { CartService } from '../shared/services/cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[];

  constructor(private apiService: ApiService, private cartService: CartService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.apiService.getProducts()
      .subscribe(products => {
        this.products = products;
      })
  }

  addItemInCart(id: number): void {
    this.cartService.addItem(this.products[id]);
  }
}
