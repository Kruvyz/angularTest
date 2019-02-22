import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/entities/product';
import { ProductService } from '../product.service';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {

  public featuredProducts$: Observable<Product[]>

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.getFeateredProducts();
  }

  getFeateredProducts(): void {
    this.featuredProducts$ = this.productService.getFeaturedProducts();
  }

  addItemToCart(id: number): void {
    this.cartService.addItem(id);
  }
}
