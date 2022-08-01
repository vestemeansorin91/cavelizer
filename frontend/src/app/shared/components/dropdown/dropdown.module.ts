import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownItemDirective } from './dropdown-item.directive';
import { DropdownTriggerForDirective } from './dropdown-trigger-for.directive';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [DropdownComponent, DropdownItemDirective, DropdownTriggerForDirective],
  imports: [
    /* Angular Modules */
    CommonModule

    /* Angular Material Modules */
    /* Cavelizer Modules */
  ],
  exports: [DropdownComponent, DropdownItemDirective, DropdownTriggerForDirective]
})
export class DropdownModule {}
