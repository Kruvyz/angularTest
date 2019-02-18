import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../shared/types/product';
import { CartService } from '../shared/services/cart/cart.service';
import { ApiService } from '../shared/services/api/api.service';
import { filter, mergeMap, merge, combineAll, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartProducts: Product[];
  public cartList;

  constructor(private cartService: CartService, private apiService: ApiService) { }

  ngOnInit() {
    this.getCart();
  }

  ngOnDestroy() {    
    this.cartService.setCart(this.cartList);
  }

  getCart() {
    this.cartList = this.cartService.getCartItems();

    this.apiService.getProducts()
      .pipe(
        mergeMap(prod => prod),
        filter(prod => this.cartList.find(i => i.id === prod.id)),
        toArray()        
      )
      .subscribe(products => {
        this.cartProducts = products;
      });
  }

  getCount(id: number): number {
    return this.cartList.find(i => i.id === id).count;
  }

  plusCount(id: number): void {
    this.cartList.find(i => i.id === id).count++;
  }

  minusCount(id: number): void {
    if (this.cartList.find(i => i.id === id).count <= 1) return;
    this.cartList.find(i => i.id === id).count--;
  }

  deleteItem(index: number): void {
    let itemId = this.cartProducts[index].id;
    let itemIndex = this.cartList.findIndex(i => i.id === itemId);

    this.cartProducts.splice(index, 1);
    this.cartList.splice(itemIndex, 1);
  }

}
