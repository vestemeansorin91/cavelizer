import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {authActions} from "../../store";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  public forgotPasswordFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.forgotPasswordFormGroup = this.buildFormGroup();
  }

  public forgoPasswordClicked() {
    const {emailOrUsername} = this.forgotPasswordFormGroup.value;
    this.store.dispatch(authActions.forgotPassword({emailOrUsername}));
  }

  private buildFormGroup() {
    return this.fb.group({
      emailOrUsername: this.fb.control('', Validators.required),
    });
  }
}
