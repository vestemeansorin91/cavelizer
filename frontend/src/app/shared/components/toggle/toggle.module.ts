import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToggleComponent } from './toggle.component';

@NgModule({
  declarations: [ToggleComponent],
  imports: [CommonModule],
  exports: [ToggleComponent]
})
export class ToggleModule {}
