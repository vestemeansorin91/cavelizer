import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    /* Angular Modules */
    CommonModule

    /* Angular Material Modules */
    /* Cavelizer Modules */
  ],
  exports: [CheckboxComponent]
})
export class CheckboxModule {}
