import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-example',
  template: `<mat-expansion-panel expanded="true">
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-toggle</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Sorin </mat-panel-description>
    </mat-expansion-panel-header>

    <div class="flex--column gap--16 mb--16">
      <cvz-toggle [(ngModel)]="leftOrRight">Activate some option</cvz-toggle>
      <cvz-toggle [(ngModel)]="leftOrRight2">Activate some option</cvz-toggle>
      <cvz-toggle [(ngModel)]="leftOrRightDisabled" [disabled]="true">This one is disabled and off</cvz-toggle>
      <cvz-toggle [(ngModel)]="leftOrRightDisabledTrue" [disabled]="true">This one is disabled and on</cvz-toggle>
    </div>
    <div class="flex--column gap--16">
      <cvz-toggle class="admin" [(ngModel)]="correct">Activate some option</cvz-toggle>
      <cvz-toggle class="admin" [(ngModel)]="correct2">Activate some option</cvz-toggle>
      <cvz-toggle class="admin" [(ngModel)]="disabledfalse" [disabled]="true">This one is disabled and off</cvz-toggle>
      <cvz-toggle class="admin" [(ngModel)]="disabledtrue" [disabled]="true">This one is disabled and on</cvz-toggle>
    </div>
  </mat-expansion-panel>`
})
export class ToggleExampleComponent {
  leftOrRight = true;
  leftOrRight2 = true;
  leftOrRightDisabled = false;
  leftOrRightDisabledTrue = true;
  correct = true;
  correct2 = true;
  disabledfalse = false;
  disabledtrue = true;
}
