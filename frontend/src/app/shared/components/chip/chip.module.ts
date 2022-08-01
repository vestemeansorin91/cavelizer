import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChipComponent } from './chip.component';

@NgModule({
  declarations: [ChipComponent],
  imports: [
    /* Angular Modules */
    CommonModule

    /* Angular Material Modules */
    /* Cavelizer Modules */
  ],
  exports: [ChipComponent]
})
export class ChipModule {}
