import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-input-validation-errors',
  templateUrl: './input-validation-errors.component.html',
  styleUrls: ['./input-validation-errors.component.scss']
})
export class InputValidationErrorsComponent {
  public control: FormControl;
  public isFocused: boolean;
  @Input() public required: string = 'Field is required';
  public showErrors: Observable<boolean>;
}
