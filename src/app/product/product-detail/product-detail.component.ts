import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product';
import { ProductService } from '../product.service';
import { CartService } from 'src/app/core/cart.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { async } from 'q';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product$: Observable<Product>;
  public product;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const productId = this.route.snapshot.params.id;

    this.getProduct(productId);
  }

  getProduct(id: number): void {
    this.product$ = this.productService.getProductDetail(id);
  }

  addItemInCart(id: number): void {
    this.cartService.addItem(id);
  }
}
