import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-example',
  template: ` <mat-expansion-panel expanded="true">
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-toggle</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Sorin</mat-panel-description>
    </mat-expansion-panel-header>

    <div class="flex--column gap--16 mb--16">
      <cvz-toggle [(ngModel)]="toggle1">Activate some option</cvz-toggle>
      <cvz-toggle [(ngModel)]="toggle2">Activate some option</cvz-toggle>
      <cvz-toggle [(ngModel)]="toggle3" [disabled]="true">This one is disabled and off</cvz-toggle>
      <cvz-toggle [(ngModel)]="toggle4" [disabled]="true">This one is disabled and on</cvz-toggle>
    </div>
    <div class="flex--column gap--16">
      <cvz-toggle class="admin" [(ngModel)]="adminToggle1">Activate some option</cvz-toggle>
      <cvz-toggle class="admin" [(ngModel)]="adminToggle2">Activate some option</cvz-toggle>
      <cvz-toggle class="admin" [(ngModel)]="adminToggle3" [disabled]="true">This one is disabled and off </cvz-toggle>
      <cvz-toggle class="admin" [(ngModel)]="adminToggle4" [disabled]="true">This one is disabled and on</cvz-toggle>
    </div>
  </mat-expansion-panel>`
})
export class ToggleExample {
  toggle1 = true;
  toggle2 = true;
  toggle3 = false;
  toggle4 = true;
  adminToggle1 = true;
  adminToggle2 = true;
  adminToggle3 = false;
  adminToggle4 = true;
}
