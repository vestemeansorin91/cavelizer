import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhoneFormatPipe } from './phone-format.pipe';

@NgModule({
  declarations: [PhoneFormatPipe],
  imports: [CommonModule],
  exports: [PhoneFormatPipe]
})
export class PhoneFormatPipeModule {}
