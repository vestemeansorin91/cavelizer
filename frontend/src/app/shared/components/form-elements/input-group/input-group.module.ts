import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckboxModule } from '../../checkbox/checkbox.module';
import { InputValidationErrorsModule } from '../input-validation-errors/input-validation-errors.module';
import { InputGroupComponent } from './input-group.component';

@NgModule({
  declarations: [InputGroupComponent],
  imports: [CommonModule, CheckboxModule, InputValidationErrorsModule],
  exports: [InputGroupComponent]
})
export class InputGroupModule {}
