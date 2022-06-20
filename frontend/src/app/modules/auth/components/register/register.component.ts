import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerFormGroup = this.buildFormGroup();
  }

  ngOnInit(): void {}

  public registerClicked() {
    this.authService
      .register(this.registerFormGroup.value)
      .subscribe((response) => {
        console.log(response);
      });
  }

  private buildFormGroup() {
    return this.fb.group({
      fullName: this.fb.control('', Validators.required),
      username: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
    });
  }
}
