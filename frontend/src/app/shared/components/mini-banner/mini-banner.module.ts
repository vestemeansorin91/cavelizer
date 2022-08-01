import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { MiniBannerComponent } from './mini-banner.component';

@NgModule({
  declarations: [MiniBannerComponent],
  imports: [CommonModule, ButtonModule],
  exports: [MiniBannerComponent]
})
export class MiniBannerModule {}
