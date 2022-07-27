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
      <cavelizer-product-item> </cavelizer-product-item>
      <cavelizer-product-item>
        <ng-content class="rating there--is"></ng-content>
      </cavelizer-product-item>
    </div>
  </mat-expansion-panel>`
})
export class ProductItemExampleComponent {}
