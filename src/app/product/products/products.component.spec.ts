import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { CartService } from 'src/app/core/cart.service';
import { ProductService } from '../product.service';
import { ProductServiceMock, CartServiceMock } from 'src/app/entities';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: CartService, useClass: CartServiceMock },
        { provide: ProductService, useClass: ProductServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
