import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-user-emergency-contact',
  templateUrl: './user-emergency-contact.component.html'
})
export class UserEmergencyContactComponent {
  public userEmergencyContactFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private notificationsService: NotificationsService
  ) {
    this.buildFormGroup();
    this.patchFormGroup();
  }

  public onSaveUserEmergencyContact() {
    this.profileService.saveUserEmergencyContact(this.userEmergencyContactFormGroup.value).subscribe(() => {
      this.notificationsService.success('Success', 'User profile saved!');
      this.userEmergencyContactFormGroup.markAsPristine();
    });
  }

  private buildFormGroup() {
    this.userEmergencyContactFormGroup = this.fb.group({
      fullName: this.fb.control(''),
      phoneNumber: this.fb.control(''),
      relationshipType: this.fb.control('')
    });
  }

  private patchFormGroup() {
    const { emergencyContact } = this.profileService.profile;

    if (!emergencyContact) {
      return;
    }

    this.userEmergencyContactFormGroup.patchValue({
      fullName: emergencyContact.fullName,
      phoneNumber: emergencyContact.phoneNumber,
      relationshipType: emergencyContact.relationshipType
    });
  }
}
