import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPayrollInformationComponent } from './user-payroll-information.component';

describe('UserPayrollInformationComponent', () => {
  let component: UserPayrollInformationComponent;
  let fixture: ComponentFixture<UserPayrollInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPayrollInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPayrollInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
