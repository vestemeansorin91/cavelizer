import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProfileService} from "../../profile.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  public userPublicProfileFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
  ) {
    this.buildFormGroup();
    this.patchFormGroup();
  }

  public onSavePublicProfile() {

  }

  // Etapa de build formular
  private buildFormGroup() {
    this.userPublicProfileFormGroup = this.fb.group({
      office: this.fb.control(''),
      department: this.fb.control(''),
      position: this.fb.control(''),
      team: this.fb.control(''),
      phone: this.fb.control('')
    })
  }

  // Etapa .... optionala .. de patch
  private patchFormGroup() {
    const {publicProfile} = this.profileService.profile;

    this.userPublicProfileFormGroup.patchValue({
      office: publicProfile.office,
      department: publicProfile.department,
      position: publicProfile.position,
      team: publicProfile.team,
      phone: publicProfile.phone,
    })
  }
}



