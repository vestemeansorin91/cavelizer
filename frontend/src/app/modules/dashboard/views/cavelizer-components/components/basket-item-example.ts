import { Component } from '@angular/core';

@Component({
  selector: 'app-basket-item-example',
  template: `<mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-basket-item</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Petrut</mat-panel-description>
    </mat-expansion-panel-header>
    <div class="flex--column gap--20">
      <cvz-basket-item> </cvz-basket-item>
      <cvz-basket-item> </cvz-basket-item>
    </div>
  </mat-expansion-panel>`
})
export class BasketItemExample {}
