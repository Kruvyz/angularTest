import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from 'src/app/entities/product';
import { ProductService } from '../product.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public products$: Observable<Product[]>;
  private searchTerm = new Subject<string>();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.searchProducts();
  }

  search(term: string): void {
    this.searchTerm.next(term);
  }

  searchProducts(): void {
    this.products$ = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.productService.searchHeroes(term))
    );
  }
}
