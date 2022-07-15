import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserHrInformationComponent} from './user-hr-information.component';

describe('UserHrInformationComponent', () => {
  let component: UserHrInformationComponent;
  let fixture: ComponentFixture<UserHrInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHrInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHrInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
