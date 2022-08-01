import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultImagePipeModule } from '../../pipes/default-image/default-image-pipe.module';
import { ButtonModule } from '../button/button.module';
import { IconModule } from '../icon/icon.module';
import { TagModule } from '../tag/tag.module';
import { ProductItemComponent } from './product-item.component';

@NgModule({
  declarations: [ProductItemComponent],
  imports: [CommonModule, RouterModule, IconModule, ButtonModule, TagModule, DefaultImagePipeModule],
  exports: [ProductItemComponent]
})
export class ProductItemModule {}
