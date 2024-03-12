import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementTabComponent } from './user-management-tab.component';

describe('UserManagementTabComponent', () => {
  let component: UserManagementTabComponent;
  let fixture: ComponentFixture<UserManagementTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserManagementTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserManagementTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
