import { Component } from '@angular/core';

@Component({
  selector: 'app-product-item-large-example',
  template: `<mat-expansion-panel expanded="true">
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-product-item-large</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Mihai</mat-panel-description>
    </mat-expansion-panel-header>
    <cvz-product-item-large></cvz-product-item-large>
  </mat-expansion-panel>`
})
export class ProductItemLargeExample {}
