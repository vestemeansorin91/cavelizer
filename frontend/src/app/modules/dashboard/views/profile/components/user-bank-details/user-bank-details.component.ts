import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-user-bank-details',
  templateUrl: './user-bank-details.component.html',
  styleUrls: ['./user-bank-details.component.scss']
})
export class UserBankDetailsComponent {
  public userBankDetailsFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private profileService: ProfileService, private notificationsService: NotificationsService) {
    this.buildFormGroup();
    this.patchFormGroup();
  }

  ngOnInit(): void {}

  public onSaveBankDetails() {
    this.profileService.saveUserBankDetails(this.userBankDetailsFormGroup.value).subscribe(() => {
      this.notificationsService.success('Success', 'User Clothes Sizes saved!');
    });
  }

  private buildFormGroup() {
    this.userBankDetailsFormGroup = this.fb.group({
      iban: this.fb.control(''),
      bic: this.fb.control('')
    });
  }

  private patchFormGroup() {
    const { bankDetails } = this.profileService.profile;

    if (!bankDetails) {
      return;
    }

    this.userBankDetailsFormGroup.patchValue({
      iban: bankDetails.iban,
      bic: bankDetails.bic
    });
  }
}
