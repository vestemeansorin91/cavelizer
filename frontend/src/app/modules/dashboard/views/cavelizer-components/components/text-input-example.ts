import { Component } from '@angular/core';

@Component({
  selector: 'app-text-input-example',
  template: `<mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-text-input</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Sorin </mat-panel-description>
    </mat-expansion-panel-header>

    <div class="flex--column gap--16">
      <cvz-input-group>
        <label>Hello</label>
        <cvz-input-text [(ngModel)]="textHere"></cvz-input-text>
      </cvz-input-group>

      <cvz-input-group>
        <cvz-input-text [(ngModel)]="textHereDisabled" [disabled]="true"></cvz-input-text>
      </cvz-input-group>
    </div>
  </mat-expansion-panel>`
})
export class TextInputExample {
  public textHere = '';
  public textHereDisabled = 'this is disabled';
}
