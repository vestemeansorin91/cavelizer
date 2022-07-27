import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-user-hr-information',
  templateUrl: './user-hr-information.component.html',
  styleUrls: ['./user-hr-information.component.scss']
})
export class UserHrInformationComponent {
  public userHrInformationFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private profileService: ProfileService, private notificationsService: NotificationsService) {
    this.buildFormGroup();
    this.patchFormGroup();
  }

  ngOnInit(): void {}

  public onSaveHrInformation() {
    this.profileService.saveUserHrInformation(this.userHrInformationFormGroup.value).subscribe(() => {
      this.notificationsService.success('Success', 'User Clothes Sizes saved!');
    });
  }

  private buildFormGroup() {
    this.userHrInformationFormGroup = this.fb.group({
      birthDate: this.fb.control(''),
      employmentType: this.fb.control(''),
      status: this.fb.control(''),
      nationality: this.fb.control(''),
      weeklyHours: this.fb.control(''),
      gender: this.fb.control('')
    });
  }

  private patchFormGroup() {
    const { hrInformation } = this.profileService.profile;

    if (!hrInformation) {
      return;
    }

    const birthDate = hrInformation.birthDate.substring(0, 10);

    this.userHrInformationFormGroup.patchValue({
      birthDate,
      employmentType: hrInformation.employmentType,
      status: hrInformation.status,
      nationality: hrInformation.nationality,
      weeklyHours: hrInformation.weeklyHours,
      gender: hrInformation.gender,
      footSize: hrInformation.footSize
    });
  }
}
