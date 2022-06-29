import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerFormGroup = this.buildFormGroup();
  }

  ngOnInit(): void {}

  public registerClicked() {
    this.authService.register(this.registerFormGroup.value).subscribe(() => {
      this.router.navigate(['/auth/login']).then((_) => null);
    });
  }

  private buildFormGroup() {
    return this.fb.group({
      fullName: this.fb.control('', Validators.required),
      username: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      gender: this.fb.control('men', Validators.required),
    });
  }
}
