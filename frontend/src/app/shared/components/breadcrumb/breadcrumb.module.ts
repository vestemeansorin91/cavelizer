import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [
    /* Angular Modules */
    CommonModule,
    RouterModule

    /* Angular Material Modules */
    /* Cavelizer Modules */
  ],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule {}
