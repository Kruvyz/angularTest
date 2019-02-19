import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../entities/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = "https://my-json-server.typicode.com/Kruvyz/angularTest/Products";

  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProductDetail(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    
    return this.http.get<Product>(url);
  }
}