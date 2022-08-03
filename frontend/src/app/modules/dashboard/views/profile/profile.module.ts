import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import {
  AvatarModule,
  ButtonModule,
  CheckboxModule,
  DefaultImagePipeModule,
  FormElementsModule,
  IconModule
} from '@cavelizer';

import { UserBankDetailsComponent } from './components/user-bank-details/user-bank-details.component';
import { UserClothesSizesComponent } from './components/user-clothes-sizes/user-clothes-sizes.component';
import { UserEmergencyContactComponent } from './components/user-emergency-contact/user-emergency-contact.component';
import { UserHrInformationComponent } from './components/user-hr-information/user-hr-information.component';
import { UserPayrollInformationComponent } from './components/user-payroll-information/user-payroll-information.component';
import { UserPersonalDataComponent } from './components/user-personal-data/user-personal-data.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserStartEndDatesComponent } from './components/user-start-end-dates/user-start-end-dates.component';
import { ProfileComponent } from './profile.component';
import { UserProfileRoutes } from './profile.routes';

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
  imports: [
    /* Angular Modules */
    CommonModule,
    UserProfileRoutes,
    FormsModule,
    ReactiveFormsModule,

    /* Angular Material Modules */
    MatOptionModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSelectModule,

    /* Cavelizer Modules */
    AvatarModule,
    ButtonModule,
    CheckboxModule,
    FormElementsModule,
    IconModule,

    DefaultImagePipeModule
  ]
})
export class UserProfileModule {}
