import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TagModule } from '../tag/tag.module';
import { BlogPreviewVerticalComponent } from './blog-preview-vertical.component';

@NgModule({
  declarations: [BlogPreviewVerticalComponent],
  imports: [CommonModule, TagModule],
  exports: [BlogPreviewVerticalComponent]
})
export class BlogPreviewVerticalModule {}
