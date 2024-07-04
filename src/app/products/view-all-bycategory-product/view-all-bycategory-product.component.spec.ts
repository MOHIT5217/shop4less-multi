import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBycategoryProductComponent } from './view-all-bycategory-product.component';

describe('ViewAllBycategoryProductComponent', () => {
  let component: ViewAllBycategoryProductComponent;
  let fixture: ComponentFixture<ViewAllBycategoryProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllBycategoryProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllBycategoryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
