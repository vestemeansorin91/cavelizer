import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {UserBankDetailsComponent} from './components/user-bank-details/user-bank-details.component';
import {UserClothesSizesComponent} from './components/user-clothes-sizes/user-clothes-sizes.component';
import {UserEmergencyContactComponent} from './components/user-emergency-contact/user-emergency-contact.component';
import {UserHrInformationComponent} from './components/user-hr-information/user-hr-information.component';
import {
  UserPayrollInformationComponent
} from './components/user-payroll-information/user-payroll-information.component';
import {UserPersonalDataComponent} from './components/user-personal-data/user-personal-data.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {UserStartEndDatesComponent} from './components/user-start-end-dates/user-start-end-dates.component';
import {ProfileComponent} from './profile.component';
import {UserProfileRoutes} from './profile.routes';

const COMPONENTS = [
  UserBankDetailsComponent,
  UserClothesSizesComponent,
  UserEmergencyContactComponent,
  UserHrInformationComponent,
  UserPayrollInformationComponent,
  UserPersonalDataComponent,
  UserProfileComponent,
  UserStartEndDatesComponent,
  ProfileComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, UserProfileRoutes, SharedModule]
})
export class UserProfileModule {}
