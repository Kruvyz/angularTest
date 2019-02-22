import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../entities/product';
import { Observable, of } from 'rxjs';
import { filter, mergeMap, toArray } from 'rxjs/operators';

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

  getFeaturedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      mergeMap(prod => prod),
      filter(prod => prod.featured),
      toArray()
    )
  }

  searchHeroes(term: string): Observable<Product[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.getProducts().pipe(
      mergeMap(prod => prod),
      filter(prod => prod.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())),
      toArray()
    );
  }
}