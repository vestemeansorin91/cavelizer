import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../icon/icon.module';
import { InputGroupModule } from './input-group/input-group.module';
import { InputTextModule } from './input-text/input-text.module';
import { InputValidationErrorsModule } from './input-validation-errors/input-validation-errors.module';
import { LabelModule } from './label/label.module';

@NgModule({
  imports: [
    /* Angular Modules */
    CommonModule,

    /* Angular Material Modules */
    /* Cavelizer Modules */
    InputGroupModule,
    InputTextModule,
    InputValidationErrorsModule,
    LabelModule,
    IconModule
  ],
  exports: [InputGroupModule, InputTextModule, InputValidationErrorsModule, LabelModule]
})
export class FormElementsModule {}
