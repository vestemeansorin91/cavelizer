import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TagComponent } from './tag.component';

@NgModule({
  declarations: [TagComponent],
  imports: [
    /* Angular Modules */
    CommonModule

    /* Angular Material Modules */
    /* Cavelizer Modules */
  ],
  exports: [TagComponent]
})
export class TagModule {}
