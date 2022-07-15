import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {authActions} from '../../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.loginFormGroup = this.buildFormGroup();
  }

  public loginClicked() {
    this.store.dispatch(authActions.signIn(this.loginFormGroup.value));
  }

  private buildFormGroup() {
    return this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required)
    });
  }
}
