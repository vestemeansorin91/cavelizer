import {Component} from '@angular/core';

@Component({
  selector: 'app-cavelizer-components',
  template: `
    <h1>CAVELIZER COMPONENTS</h1>

    <mat-accordion>
      <app-icons-example></app-icons-example>
      <app-button-example></app-button-example>
      <app-dropdown-example></app-dropdown-example>
      <app-mini-banner-example></app-mini-banner-example>
      <app-inner-tab-group-example></app-inner-tab-group-example>
      <app-quote-example></app-quote-example>
      <app-checkbox-example></app-checkbox-example>
      <app-text-input-example></app-text-input-example>
      <app-toggle-example></app-toggle-example>
    </mat-accordion>`
})
export class CavelizerComponentsComponent {
}
