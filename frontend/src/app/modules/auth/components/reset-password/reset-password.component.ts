import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {authActions} from "../../store";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  public resetPasswordFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.resetPasswordFormGroup = this.buildFormGroup();
  }

  public resetPasswordClicked() {
    const {code, email, password, confirmPassword} = this.resetPasswordFormGroup.value;
    this.store.dispatch(authActions.resetPassword({code, email, password, confirmPassword}));
  }

  private buildFormGroup() {
    return this.fb.group({
      code: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      confirmPassword: this.fb.control('', Validators.required),
    });
  }
}
