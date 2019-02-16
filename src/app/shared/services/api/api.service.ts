import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../types/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private productsUrl = "https://my-json-server.typicode.com/Kruvyz/angularTest/Products";

  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
