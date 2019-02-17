import { Injectable } from '@angular/core';
import { Product } from '../../types/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCartItems(): Product[]{
    try {
      return JSON.parse(localStorage.getItem("cart"));
    } catch(e) {
      return null;
    }
  }

  setCart(products: Product[]): void{
    localStorage.setItem("cart", JSON.stringify(products));
  }
}
