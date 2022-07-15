import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserStartEndDatesComponent} from './user-start-end-dates.component';

describe('UserStartEndDatesComponent', () => {
  let component: UserStartEndDatesComponent;
  let fixture: ComponentFixture<UserStartEndDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStartEndDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStartEndDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
