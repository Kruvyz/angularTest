import { Injectable } from '@angular/core';
import { Product } from '../entities/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCartItems() {
    try {
      return JSON.parse(localStorage.getItem("cart"));
    } catch(e) {
      return null;
    }
  }

  setCart(products): void {
    localStorage.setItem("cart", JSON.stringify(products));
  }

  addItem(product: Product): void {
    let cartList = this.getCartItems();
    let index = cartList.findIndex(i => i.id === product.id);

    if (index >= 0) {
      cartList[index].count++;
    } else {
      cartList.push({ id: product.id, count: 1 });
    }

    this.setCart(cartList);
  }  
}