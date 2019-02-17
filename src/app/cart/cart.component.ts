import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/types/product';
import { CartService } from '../shared/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartProducts: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.cartProducts = this.cartService.getCartItems();
  }

  plusCount(index: number): void {
    this.cartProducts[index].count++;
  }

  minusCount(index: number): void {
    if (this.cartProducts[index].count <= 1) return;
    this.cartProducts[index].count--;
  }

  deleteItem(index: number): void {
    this.cartProducts.splice(index, 1);
  }

}
