import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCartItems() {
    try {
      return JSON.parse(localStorage.getItem('cart'));
    } catch (e) {
      return null;
    }
  }

  setCart(products): void {
    localStorage.setItem('cart', JSON.stringify(products));
  }

  addItem(id: number): void {
    const cartList = this.getCartItems() || [];
    const index = cartList.findIndex(i => i.id === id);

    if (index < 0) {
      cartList.push({ id, count: 1 });
    } else {
      cartList[index].count++;
    }

    this.setCart(cartList);
  }
}
