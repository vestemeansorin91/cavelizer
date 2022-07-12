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
    <div class="flex flex--wrap gap--16">
      <cavelizer-chip>48% </cavelizer-chip>
      <cavelizer-chip class="error">48% </cavelizer-chip>
      <cavelizer-chip class="error fill">48% </cavelizer-chip>
    </div>
  </mat-expansion-panel>`
})
export class ChipExampleComponent {}
