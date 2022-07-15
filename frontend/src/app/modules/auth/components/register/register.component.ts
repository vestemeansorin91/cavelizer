import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {authActions} from '../../store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public registerFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.registerFormGroup = this.buildFormGroup();
  }

  public registerClicked() {
    this.store.dispatch(authActions.signUp({payload: this.registerFormGroup.value}));
  }

  private buildFormGroup() {
    return this.fb.group({
      fullName: this.fb.control('', [Validators.required]),
      username: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', Validators.required),
      confirmPassword: this.fb.control('', Validators.required)
    });
  }
}
