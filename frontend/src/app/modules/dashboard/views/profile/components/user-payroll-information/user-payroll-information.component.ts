import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-user-payroll-information',
  templateUrl: './user-payroll-information.component.html'
})
export class UserPayrollInformationComponent {
  public userPayrollInformationFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private notificationsService: NotificationsService
  ) {
    this.buildFormGroup();
    this.patchFormGroup();
  }

  public onSavePayrollInformation() {
    this.profileService.saveUserPayrollInformation(this.userPayrollInformationFormGroup.value).subscribe(() => {
      this.notificationsService.success('Success', 'User Payroll Information saved!');
      this.userPayrollInformationFormGroup.markAsPristine();
    });
  }

  private buildFormGroup() {
    this.userPayrollInformationFormGroup = this.fb.group({
      levelOfEducation: this.fb.control(''),
      salaryType: this.fb.control(''),
      typeOfHealthInsurance: this.fb.control(''),
      religion: this.fb.control(''),
      cnp: this.fb.control(''),
      healthInsurance: this.fb.control('')
    });
  }

  private patchFormGroup() {
    const { payrollInformation } = this.profileService.profile;

    if (!payrollInformation) {
      return;
    }

    this.userPayrollInformationFormGroup.patchValue({
      levelOfEducation: payrollInformation.levelOfEducation,
      salaryType: payrollInformation.salaryType,
      typeOfHealthInsurance: payrollInformation.typeOfHealthInsurance,
      religion: payrollInformation.religion,
      cnp: payrollInformation.cnp,
      healthInsurance: payrollInformation.healthInsurance
    });
  }
}
