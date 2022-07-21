import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileService } from '../../profile.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-user-clothes-sizes',
  templateUrl: './user-clothes-sizes.component.html',
  styleUrls: ['./user-clothes-sizes.component.scss']
})
export class UserClothesSizesComponent {
  public userClothesSizesFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private profileService: ProfileService, private notificationsService: NotificationsService) {
    this.buildFormGroup();
    this.patchFormGroup();
  }

  ngOnInit(): void {}

  public onSaveClothesSizes() {
    this.profileService.saveUserClothesSizes(this.userClothesSizesFormGroup.value).subscribe(() => {
      this.notificationsService.success('Success', 'User Clothes Sizes saved!');
    });
  }

  private buildFormGroup() {
    this.userClothesSizesFormGroup = this.fb.group({
      shirtSize: this.fb.control(''),
      hipSize: this.fb.control(''),
      footSize: this.fb.control('')
    });
  }

  private patchFormGroup() {
    const { clothesSizes } = this.profileService.profile;

    if (!clothesSizes) {
      return;
    }

    this.userClothesSizesFormGroup.patchValue({
      shirtSize: clothesSizes.shirtSize,
      hipSize: clothesSizes.hipSize,
      footSize: clothesSizes.footSize
    });
  }
}
