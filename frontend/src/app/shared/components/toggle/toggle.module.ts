import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToggleComponent } from './toggle.component';

@NgModule({
  declarations: [ToggleComponent],
  imports: [
    /* Angular Modules */
    CommonModule

    /* Angular Material Modules */
    /* Cavelizer Modules */
  ],
  exports: [ToggleComponent]
})
export class ToggleModule {}
