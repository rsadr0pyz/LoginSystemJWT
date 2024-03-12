import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManagementTabComponent } from './product-management-tab.component';

describe('ProductManagementTabComponent', () => {
  let component: ProductManagementTabComponent;
  let fixture: ComponentFixture<ProductManagementTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductManagementTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductManagementTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
