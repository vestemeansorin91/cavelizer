import { Component } from '@angular/core';

@Component({
  selector: 'app-cavelizer-components',
  template: `
    <h1>CAVELIZER COMPONENTS</h1>

    <mat-accordion>
      <app-icons-example></app-icons-example>
      <app-button-example></app-button-example>
      <app-dropdown-example></app-dropdown-example>
      <app-mini-banner-example></app-mini-banner-example>
    </mat-accordion>`
})
export class CavelizerComponentsComponent {
}
