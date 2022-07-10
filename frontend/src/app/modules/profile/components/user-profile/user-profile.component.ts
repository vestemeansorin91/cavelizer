import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  public userPublicProfileFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildFormGroup();
  }

  ngOnInit(): void {}


  private buildFormGroup() {
    this.userPublicProfileFormGroup = this.fb.group({
      office: this.fb.control(''),
      department: this.fb.control('development'),
      position: this.fb.control('junior'),
      team: this.fb.control('qa'),
      phone: this.fb.control('')
    })
  }
}


// Etapa de build formular

// Etapa .... optionala .. de patch
