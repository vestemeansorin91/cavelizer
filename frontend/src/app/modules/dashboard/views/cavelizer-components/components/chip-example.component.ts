import { Component } from '@angular/core';

@Component({
  selector: 'app-chip-example',
  template: `<mat-expansion-panel [expanded]="true">
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-chip</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Mihai</mat-panel-description>
    </mat-expansion-panel-header>

    <cavelizer-chip>
      <ng-container tag>48%</ng-container>
    </cavelizer-chip>
  </mat-expansion-panel>`
})
export class ChipExampleComponent {}
