import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-user-start-end-dates',
  templateUrl: './user-start-end-dates.component.html'
})
export class UserStartEndDatesComponent {
  public userStartEndDatesFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private notificationsService: NotificationsService
  ) {
    this.buildFormGroup();
    this.patchFormGroup();
  }

  public onSaveStartEndDates() {
    this.profileService.saveUserStartEndDates(this.userStartEndDatesFormGroup.value).subscribe(() => {
      this.notificationsService.success('Success', 'User Clothes Sizes saved!');
      this.userStartEndDatesFormGroup.markAsPristine();
    });
  }

  private buildFormGroup() {
    this.userStartEndDatesFormGroup = this.fb.group({
      hireDate: this.fb.control(''),
      contractEndDate: this.fb.control(''),
      subCompany: this.fb.control('')
    });
  }

  private patchFormGroup() {
    const { startEndDates } = this.profileService.profile;

    if (!startEndDates) {
      return;
    }

    const hireDate = startEndDates.hireDate.substring(0, 10);
    const contractEndDate = startEndDates.contractEndDate.substring(0, 10);

    this.userStartEndDatesFormGroup.patchValue({
      hireDate,
      contractEndDate,
      subCompany: startEndDates.subCompany
    });
  }
}
