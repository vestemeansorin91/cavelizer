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

      <!-- TODO: Petrut replace all
               <i class="las la-angle-left" prefix></i>
               <i class="las la-angle-right" suffix></i> -->
      <div class="flex--column align--start gap--16">
        <select [(ngModel)]="size">
          <option value="small">Small</option>
          <option value="">Normal</option>
          <option value="big">Big</option>
        </select>

        <select [(ngModel)]="style">
          <option value="grey">Grey</option>
          <option value="transparent">Transparent</option>
          <option value="">Normal (green)</option>
          <option value="white">White</option>
        </select>

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
