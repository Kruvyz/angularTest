import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../entities/product';
import { filter, mergeMap, merge, combineAll, toArray } from 'rxjs/operators';
import { CartService } from 'src/app/core/cart.service';
import { ProductService } from 'src/app/product/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pages-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartProducts$: Observable<Product[]>;
  public cartList;

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit() {
    this.getCart();
  }

  ngOnDestroy() {    
    this.cartService.setCart(this.cartList);
  }

  getCart() {
    this.cartList = this.cartService.getCartItems();

    this.cartProducts$ = this.productService.getProducts()
      .pipe(
        mergeMap(prod => prod),
        filter(prod => this.cartList.find(i => i.id === prod.id)),
        toArray()        
      );
  }

  // NOT COMPLETE

  getCount(id: number): number {
    return this.cartList.find(i => i.id === id).count;
  }

  plusCount(id: number): void {
    this.cartList.find(i => i.id === id).count++;
  }

  minusCount(id: number): void {
    if (this.getCount(id) <= 1) return;
    this.cartList.find(i => i.id === id).count--;
  }

  // deleteItem(index: number): void {
  //   let itemId = this.cartProducts[index].id;
  //   let itemIndex = this.cartList.findIndex(i => i.id === itemId);

  //   this.cartProducts.splice(index, 1);
  //   this.cartList.splice(itemIndex, 1);
  // }

}
