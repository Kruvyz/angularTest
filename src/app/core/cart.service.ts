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

  addItem(id: number): void {
    let cartList = this.getCartItems() || [];
    let index = cartList.findIndex(i => i.id === id);

    if (index <= 0) {
      cartList.push({ id: id, count: 1 });
    } else {      
      cartList[index].count++;
    }

    this.setCart(cartList);
  }  
}