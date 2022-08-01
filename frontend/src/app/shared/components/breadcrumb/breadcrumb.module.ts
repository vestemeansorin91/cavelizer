import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    /* Angular Modules */
    CommonModule

    /* Angular Material Modules */
    /* Cavelizer Modules */
  ],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule {}
