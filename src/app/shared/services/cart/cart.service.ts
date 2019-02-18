import { Injectable } from '@angular/core';
import { Product } from '../../types/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCartItems(): Product[] {
    try {
      return JSON.parse(localStorage.getItem("cart"));
    } catch(e) {
      return null;
    }
  }

  setCart(products: Product[]): void {
    localStorage.setItem("cart", JSON.stringify(products));
  }

  addItem(product: Product): void {
    let cartList = this.getCartItems();
    let index = cartList.findIndex(i => i.id === product.id);

    if (index) {
      cartList[index].count++;
    } else {
      cartList.push({ ...product, count: 1 });
    }

    this.setCart(cartList);
  }  
}
