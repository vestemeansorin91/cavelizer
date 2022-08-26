import { Component } from '@angular/core';
import { PRODUCTS_MOCK } from '../mock/products.mock';
import { ProductInterface } from '../../../../../shared/components/product-item/product.interface';

@Component({
  selector: 'app-basket-item-example',
  template: `<mat-expansion-panel>
    <mat-expansion-panel-header class="wip">
      <mat-panel-title>
        <strong>cavelizer-basket-item</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Petrut</mat-panel-description>
    </mat-expansion-panel-header>
    <div class="flex--column gap--20">
      <cvz-basket-item *ngFor="let product of products" [product]="product"> </cvz-basket-item>
    </div>
  </mat-expansion-panel>`
})
export class BasketItemExample {
  public products: ProductInterface[] = PRODUCTS_MOCK;
}
