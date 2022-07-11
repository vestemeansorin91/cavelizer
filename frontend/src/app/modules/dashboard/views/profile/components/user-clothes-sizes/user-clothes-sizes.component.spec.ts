import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserClothesSizesComponent } from './user-clothes-sizes.component';

describe('UserClothesSizesComponent', () => {
  let component: UserClothesSizesComponent;
  let fixture: ComponentFixture<UserClothesSizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserClothesSizesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserClothesSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
