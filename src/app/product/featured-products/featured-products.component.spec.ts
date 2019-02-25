import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProductsComponent } from './featured-products.component';
import { CartService } from 'src/app/core/cart.service';
import { CartServiceMock, ProductServiceMock } from 'src/app/entities';
import { ProductService } from '../product.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeaturedProductsComponent', () => {
  let component: FeaturedProductsComponent;
  let fixture: ComponentFixture<FeaturedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedProductsComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: CartService, useClass: CartServiceMock },
        { provide: ProductService, useClass: ProductServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
