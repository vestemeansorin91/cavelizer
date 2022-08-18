import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefaultImagePipeModule } from '../../pipes/default-image/default-image-pipe.module';
import { ButtonModule } from '../button/button.module';
import { IconModule } from '../icon/icon.module';
import { ProductItemLargeComponent } from './product-item-large.component';

@NgModule({
  declarations: [ProductItemLargeComponent],
  imports: [
    /* Angular Modules */
    CommonModule,

    /* Angular Material Modules */
    /* Cavelizer Modules */
    ButtonModule,
    IconModule,

    DefaultImagePipeModule
  ],
  exports: [ProductItemLargeComponent]
})
export class ProductItemLargeModule {}
