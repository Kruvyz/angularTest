import { Observable } from 'rxjs';
import { Product } from './product';

export class ProductServiceMock {
  getProducts(): Observable<Product[]> {
    return new Observable<Product[]>();
  }

  getProductDetail(id: number): Observable<Product> {
    return new Observable<Product>();
  }

  getFeaturedProducts(): Observable<Product[]> {
    return new Observable<Product[]>();
  }

  searchHeroes(term: string): Observable<Product[]> {
    return new Observable<Product[]>();
  }
}
