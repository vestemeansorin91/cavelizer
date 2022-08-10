import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {BlogPreviewComponent} from './blog-item-preview.component';
import {TagModule} from "../tag/tag.module";


@NgModule({
  declarations: [BlogPreviewComponent],
  imports: [CommonModule, TagModule],
  exports: [BlogPreviewComponent]
})
export class BlogPreviewModule {}
