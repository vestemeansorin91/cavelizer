import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileService } from '../../profile.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-user-personal-data',
  templateUrl: './user-personal-data.component.html',
  styleUrls: ['./user-personal-data.component.scss']
})
export class UserPersonalDataComponent {
  public userPersonalDataFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private profileService: ProfileService, private notificationsService: NotificationsService) {
    this.buildFormGroup();
    this.patchFormGroup();
  }

  ngOnInit(): void {}

  public onSavePersonalData() {
    this.profileService.saveUserPersonalData(this.userPersonalDataFormGroup.value).subscribe(() => {
      this.notificationsService.success('Success', 'User personal data saved!');
    });
  }

  private buildFormGroup() {
    this.userPersonalDataFormGroup = this.fb.group({
      street: this.fb.control(''),
      houseNumber: this.fb.control(''),
      zipCode: this.fb.control(''),
      city: this.fb.control(''),
      phoneNumber: this.fb.control(''),
      privateEmail: this.fb.control(''),
      validityIdentityCard: this.fb.control(''),
      children: this.fb.control('')
    });
  }

  private patchFormGroup() {
    const { personalData } = this.profileService.profile;

    if (!personalData) {
      return;
    }

    this.userPersonalDataFormGroup.patchValue({
      street: personalData.street,
      houseNumber: personalData.houseNumber,
      zipCode: personalData.zipCode,
      city: personalData.city,
      phoneNumber: personalData.phoneNumber,
      privateEmail: personalData.privateEmail,
      validityIdentityCard: personalData.validityIdentityCard,
      children: personalData.children
    });
  }
}
