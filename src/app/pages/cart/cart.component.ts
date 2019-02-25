import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../entities/product';
import { filter, mergeMap, toArray, map } from 'rxjs/operators';
import { CartService } from 'src/app/core/cart.service';
import { ProductService } from 'src/app/product/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pages-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

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
        map(products => products.filter(prod => {
          return this.cartList.find(i => i.id === prod.id);
        }))
      );
  }

  getCount(id: number): number {
    return this.cartList.find(i => i.id === id).count;
  }

  plusCount(id: number): void {
    this.cartList.find(i => i.id === id).count++;
  }

  minusCount(id: number): void {
    if (this.getCount(id) <= 1) {
      return;
    }
    this.cartList.find(i => i.id === id).count--;
  }

  deleteItem(id: number): void {
    this.cartList = this.cartList.filter(i => i.id !== id);

    this.cartProducts$ = this.cartProducts$.pipe(
      map(prod => prod.filter(i => i.id !== id))
    );
  }

}
