import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TagModule } from '../tag/tag.module';
import { CommentComponent } from './comment.component';

@NgModule({
  declarations: [CommentComponent],
  imports: [CommonModule, TagModule],
  exports: [CommentComponent]
})
export class CommentlModule {}
