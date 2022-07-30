import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefaultImagePipe } from './default-image.pipe';

@NgModule({
  declarations: [DefaultImagePipe],
  imports: [CommonModule],
  exports: [DefaultImagePipe]
})
export class DefaultImagePipeModule {}
