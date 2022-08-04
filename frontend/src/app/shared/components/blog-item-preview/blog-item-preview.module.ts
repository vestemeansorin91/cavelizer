import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {BlogPreviewComponent} from './blog-item-preview.component';

@NgModule({
  declarations: [BlogPreviewComponent],
  imports: [CommonModule],
  exports: [BlogPreviewComponent]
})
export class BlogPreviewModule {}
