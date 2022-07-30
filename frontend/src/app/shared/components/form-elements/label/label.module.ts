import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LabelComponent } from './label.component';

@NgModule({
  declarations: [LabelComponent],
  imports: [CommonModule],
  exports: [LabelComponent]
})
export class LabelModule {}
