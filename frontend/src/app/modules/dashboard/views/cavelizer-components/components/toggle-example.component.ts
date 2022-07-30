import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-example',
  template: `<mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-toggle</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Sorin </mat-panel-description>
    </mat-expansion-panel-header>

    <div class="flex--column gap--16">
      <cvz-toggle [(ngModel)]="leftOrRight">Activate some option</cvz-toggle>
      <cvz-toggle [(ngModel)]="leftOrRight2">Activate some option</cvz-toggle>
      <cvz-toggle [(ngModel)]="leftOrRightDisabled" [disabled]="true">This one is disabled</cvz-toggle>
      <cvz-toggle [(ngModel)]="leftOrRightDisabledTrue" [disabled]="true">This one is disabled</cvz-toggle>
    </div>
  </mat-expansion-panel>`
})
export class ToggleExampleComponent {
  leftOrRight = true;
  leftOrRight2 = true;
  leftOrRightDisabled = false;
  leftOrRightDisabledTrue = true;
}
