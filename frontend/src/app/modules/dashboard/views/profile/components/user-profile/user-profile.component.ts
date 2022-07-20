import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent {
  public userPublicProfileFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private profileService: ProfileService, private notificationsService: NotificationsService) {
    this.buildFormGroup();
    this.patchFormGroup();
  }

  public onSavePublicProfile() {
    this.profileService.saveUserPublicProfile(this.userPublicProfileFormGroup.value).subscribe(() => {
      this.notificationsService.success('Success', 'User profile saved!');
    });
  }

  // Etapa de build formular
  private buildFormGroup() {
    this.userPublicProfileFormGroup = this.fb.group({
      office: this.fb.control(''),
      department: this.fb.control(''),
      position: this.fb.control(''),
      team: this.fb.control(''),
      phone: this.fb.control('')
    });
  }

  // Etapa .... optinal .. de patch
  private patchFormGroup() {
    const { publicProfile } = this.profileService.profile;

    if (!publicProfile) {
      return;
    }

    this.userPublicProfileFormGroup.patchValue({
      office: publicProfile.office,
      department: publicProfile.department,
      position: publicProfile.position,
      team: publicProfile.team,
      phone: publicProfile.phone
    });
  }
}
