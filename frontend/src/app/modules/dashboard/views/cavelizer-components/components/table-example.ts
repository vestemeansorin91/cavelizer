import { Component } from '@angular/core';

@Component({
  selector: 'app-table-example',
  template: `<mat-expansion-panel expanded="true">
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-table-example</strong>
      </mat-panel-title>
      <mat-panel-description>Creat de Mihai</mat-panel-description>
    </mat-expansion-panel-header>
    <cvz-table></cvz-table>
  </mat-expansion-panel>`
})
export class TableExample {}
