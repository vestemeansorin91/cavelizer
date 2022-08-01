import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InnerTabGroupComponent } from './inner-tab-group.component';
import { InnerTabComponent } from './inner-tab/inner-tab.component';

@NgModule({
  declarations: [InnerTabGroupComponent, InnerTabComponent],
  imports: [
    /* Angular Modules */
    CommonModule

    /* Angular Material Modules */
    /* Cavelizer Modules */
  ],
  exports: [InnerTabGroupComponent, InnerTabComponent]
})
export class InnerTabGroupModule {}
