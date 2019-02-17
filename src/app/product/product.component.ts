import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api/api.service';
import { Product } from '../shared/types/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product: Product;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getProduct(1);
  }

  getProduct(id: number): void {
    this.apiService.getProductDetail(id)
      .subscribe(product => {
        this.product = product;
      })
  }

}