import { Component } from '@angular/core';

@Component({
  selector: 'app-cavelizer-components',
  template: ` <h1>CAVELIZER COMPONENTS</h1>
    <mat-accordion>
      <!-- TODO: Delete this after you implement blog item preview -->
      <app-blog-item-preview-example2></app-blog-item-preview-example2>
      <app-icons-example></app-icons-example>
      <app-button-example></app-button-example>
      <app-dropdown-example></app-dropdown-example>
      <app-mini-banner-example></app-mini-banner-example>
      <app-inner-tab-group-example></app-inner-tab-group-example>
      <app-quote-example></app-quote-example>
      <app-tag-example></app-tag-example>
      <app-chip-example></app-chip-example>
      <app-checkbox-example></app-checkbox-example>
      <app-text-input-example></app-text-input-example>
      <app-toggle-example></app-toggle-example>
      <app-range-slider-example></app-range-slider-example>
      <app-radio-group-example></app-radio-group-example>
      <app-product-item-example></app-product-item-example>
    </mat-accordion>`
})
export class CavelizerComponentsComponent {}
