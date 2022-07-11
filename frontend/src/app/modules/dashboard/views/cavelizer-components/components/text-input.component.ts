import {Component} from '@angular/core';

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
      <cavelizer-input-group>
        <label>Hello</label>
        <cavelizer-text-input [(ngModel)]="textHere"></cavelizer-text-input>
      </cavelizer-input-group>

      <cavelizer-input-group>
        <cavelizer-text-input [(ngModel)]="textHereDisabled" [disabled]="true"></cavelizer-text-input>
      </cavelizer-input-group>
    </div>
  </mat-expansion-panel>`
})
export class TextInputComponent {
  public textHere = '';
  public textHereDisabled = 'this is disabled';
}
