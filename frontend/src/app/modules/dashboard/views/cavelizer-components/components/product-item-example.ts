import { Component } from '@angular/core';
import { ProductInterface } from '../../../../../shared/components/product-item/product.interface';
import { PRODUCTS_MOCK } from '../mock/products.mock';

@Component({
  selector: 'app-product-item-example',
  template: `<mat-expansion-panel expanded="true">
    <mat-expansion-panel-header class="wip">
      <mat-panel-title>
        <strong>cavelizer-product-item</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Petrut</mat-panel-description>
    </mat-expansion-panel-header>
    <div class="flex gap--20 flex--wrap">
      <cvz-product-item *ngFor="let product of products" [product]="product"></cvz-product-item>
    </div>
  </mat-expansion-panel>`
})
export class ProductItemExample {
  public products: ProductInterface[] = PRODUCTS_MOCK;
}
