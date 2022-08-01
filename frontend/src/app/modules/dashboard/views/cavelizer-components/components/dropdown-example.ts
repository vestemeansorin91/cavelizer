import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-example',
  template: `<mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-dropdown</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Sorin </mat-panel-description>
    </mat-expansion-panel-header>

    <span [dropdownTriggerFor]="dropdown" class="small transparent">
      Trigger dropdown
      <cvz-icon name="arrow-down" class="primary-color"></cvz-icon>
    </span>

    <cvz-dropdown #dropdown>
      <div dropdownItem>Element 1</div>
      <div dropdownItem>Element 2</div>
      <div dropdownItem>Element 3</div>
    </cvz-dropdown>
  </mat-expansion-panel>`
})
export class DropdownExample {}
