import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWraperComponent } from './page-wraper.component';

describe('PageWraperComponent', () => {
  let component: PageWraperComponent;
  let fixture: ComponentFixture<PageWraperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWraperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
