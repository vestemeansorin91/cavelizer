import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-group-example',
  template: `
    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>
          <strong>cvz-radio-group</strong>&nbsp; | &nbsp;
          <strong>cvz-radio-item</strong>
        </mat-panel-title>
        <mat-panel-description> Creat de Sorin </mat-panel-description>
      </mat-expansion-panel-header>

      <h3>Horizontal (default)</h3>
      <cvz-radio-group [(ngModel)]="gender">
        <cvz-radio-item [value]="true" [isActive]="true">Default on true</cvz-radio-item>
        <cvz-radio-item [value]="false">Default on false</cvz-radio-item>
      </cvz-radio-group>

      <h3>Vertical</h3>
      <cvz-radio-group [(ngModel)]="gender" class="vertical">
        <cvz-radio-item [value]="true" [isActive]="true">Default on true</cvz-radio-item>
        <cvz-radio-item [value]="false">Default on false</cvz-radio-item>
      </cvz-radio-group>
    </mat-expansion-panel>
  `
})
export class RadioGroupExample {
  public gender = 'male';
}
