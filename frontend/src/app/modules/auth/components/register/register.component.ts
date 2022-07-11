import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { authActions } from '../../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.registerFormGroup = this.buildFormGroup();
  }

  ngOnInit(): void {}

  public registerClicked() {
    this.store.dispatch(authActions.signUp({payload: this.registerFormGroup.value}));
  }

  private buildFormGroup() {
    return this.fb.group({
      fullName: this.fb.control('', [Validators.required]),
      username: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', Validators.required),
    });
  }
}
