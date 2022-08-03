import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { IconModule } from '../icon/icon.module';
import { MiniBannerComponent } from './mini-banner.component';

@NgModule({
  declarations: [MiniBannerComponent],
  imports: [
    /* Angular Modules */
    CommonModule,

    /* Angular Material Modules */
    /* Cavelizer Modules */
    ButtonModule,
    IconModule
  ],
  exports: [MiniBannerComponent]
})
export class MiniBannerModule {}
