import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {AuthShellComponent} from './auth-shell.component';
import {AuthRoutesModule} from './auth.routes';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {AuthService} from './services/auth.service';

const COMPONENTS = [
  AuthShellComponent,
  LoginComponent,
  RegisterComponent,
  ForgotPasswordComponent,
  ResetPasswordComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, AuthRoutesModule, SharedModule],
  providers: [AuthService],
  exports: [COMPONENTS],
})
export class AuthModule {
}
