import {Component} from '@angular/core';

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
      <cavelizer-icon name="arrow-down" class="primary-color"></cavelizer-icon>
    </span>

    <cavelizer-dropdown #dropdown>
      <div dropdownItem>Element 1</div>
      <div dropdownItem>Element 2</div>
      <div dropdownItem>Element 3</div>
    </cavelizer-dropdown>
  </mat-expansion-panel>`
})
export class DropdownExampleComponent { }
