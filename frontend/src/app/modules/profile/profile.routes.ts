import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBankDetailsComponent } from './components/user-bank-details/user-bank-details.component';
import { UserClothesSizesComponent } from './components/user-clothes-sizes/user-clothes-sizes.component';
import { UserEmergencyContactComponent } from './components/user-emergency-contact/user-emergency-contact.component';
import { UserHrInformationComponent } from './components/user-hr-information/user-hr-information.component';
import { UserPayrollInformationComponent } from './components/user-payroll-information/user-payroll-information.component';
import { UserPersonalDataComponent } from './components/user-personal-data/user-personal-data.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserStartEndDatesComponent } from './components/user-start-end-dates/user-start-end-dates.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'profile',
      },
      {
        path: 'profile',
        component: UserProfileComponent,
      },
      {
        path: 'hr-information',
        component: UserHrInformationComponent,
      },
      {
        path: 'start-end-dates',
        component: UserStartEndDatesComponent,
      },
      {
        path: 'personal-data',
        component: UserPersonalDataComponent,
      },
      {
        path: 'clothes-sizes',
        component: UserClothesSizesComponent,
      },
      {
        path: 'bank-details',
        component: UserBankDetailsComponent,
      },
      {
        path: 'emergency-contact',
        component: UserEmergencyContactComponent,
      },
      {
        path: 'payroll-information',
        component: UserPayrollInformationComponent,
      },
      {
        path: '**',
        redirectTo: 'profile',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileRoutes {}
