import {Component} from '@angular/core';

@Component({
  selector: 'app-button-example',
  template: `
    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>
          <strong>cavelizer-button</strong>
        </mat-panel-title>
        <mat-panel-description>
          Creat de Sorin
        </mat-panel-description>
      </mat-expansion-panel-header>

      <div class="flex--column align--start gap--16">
        <div class="align--center gap--32">
          <mat-form-field appearance="outline">
            <mat-label>Size</mat-label>
            <mat-select [(ngModel)]="size">
              <mat-option value="small">Small</mat-option>
              <mat-option value="">Normal</mat-option>
              <mat-option value="big">Big</mat-option>
            </mat-select>
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Color</mat-label>
            <mat-select [(ngModel)]="style">
              <mat-option value="grey">Grey</mat-option>
              <mat-option value="transparent">Transparent</mat-option>
              <mat-option value="">Normal (green)</mat-option>
              <mat-option value="white">White</mat-option>
            </mat-select>
          </mat-form-field>
        </div>

        <span>Classes added: {{size}} {{style}}</span>
        <cavelizer-button [ngClass]="[size, style]">Submit</cavelizer-button>
      </div>
    </mat-expansion-panel>
  `,
})
export class ButtonExampleComponent {
  public size: 'big' | 'small' | '' = '';
  public style: 'grey' | 'transparent' | 'white' | '' = '';
}
