import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefaultImagePipeModule } from '../../pipes/default-image/default-image-pipe.module';
import { ButtonModule } from '../button/button.module';
import { IconModule } from '../icon/icon.module';
import { TagModule } from '../tag/tag.module';
import { ProductItemComponent } from './product-item.component';

@NgModule({
  declarations: [ProductItemComponent],
  imports: [
    /* Angular Modules */
    CommonModule,

    /* Angular Material Modules */
    /* Cavelizer Modules */
    ButtonModule,
    IconModule,
    TagModule,

    DefaultImagePipeModule
  ],
  exports: [ProductItemComponent]
})
export class ProductItemModule {}
