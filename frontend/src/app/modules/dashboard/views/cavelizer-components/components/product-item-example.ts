import { Component } from '@angular/core';

@Component({
  selector: 'app-product-item-example',
  template: `<mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-product-item</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Petrut</mat-panel-description>
    </mat-expansion-panel-header>
    <div class="flex gap--20">
      <cvz-product-item> </cvz-product-item>
      <cvz-product-item> </cvz-product-item>
    </div>
  </mat-expansion-panel>`
})
export class ProductItemExample {}
