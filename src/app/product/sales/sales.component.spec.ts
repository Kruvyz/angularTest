import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesComponent } from './sales.component';
import { ProductService } from '../product.service';
import { ProductServiceMock } from 'src/app/entities';

describe('SalesComponent', () => {
  let component: SalesComponent;
  let fixture: ComponentFixture<SalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesComponent ],
      providers: [
        { provide: ProductService, useClass: ProductServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
