import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBankDetailsComponent } from './user-bank-details.component';

describe('UserBankDetailsComponent', () => {
  let component: UserBankDetailsComponent;
  let fixture: ComponentFixture<UserBankDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBankDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
