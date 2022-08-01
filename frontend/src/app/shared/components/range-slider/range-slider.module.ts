import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RangeSliderComponent } from './range-slider.component';

@NgModule({
  declarations: [RangeSliderComponent],
  imports: [
    /* Angular Modules */
    CommonModule,

    /* Angular Material Modules */
    /* Cavelizer Modules */

    /* Vendors Modules */
    NgxSliderModule
  ],
  exports: [RangeSliderComponent]
})
export class RangeSliderModule {}
