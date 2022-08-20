import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../icon/icon.module';
import { CheckboxModule } from "../checkbox/checkbox.module";
import { RatingComponent } from './rating.component';


@NgModule({
  declarations: [RatingComponent],
  imports: [
    /* Angular Modules */
    CommonModule,

    /* Angular Material Modules */
    /* Cavelizer Modules */
    IconModule,
    CheckboxModule
  ],
  exports: [RatingComponent]
})
export class RatingModule {}
