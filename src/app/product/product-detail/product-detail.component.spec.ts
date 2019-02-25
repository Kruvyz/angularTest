import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { CartService } from 'src/app/core/cart.service';
import { CartServiceMock, ProductServiceMock } from 'src/app/entities';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      providers: [
        { provide: CartService, useClass: CartServiceMock },
        { provide: ProductService, useClass: ProductServiceMock },
        { provide: ActivatedRoute, useValue: {snapshot: {params: {id: '1'}}} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
