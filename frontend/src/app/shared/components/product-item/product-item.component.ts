import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from './product.interface';

@Component({
  selector: 'cvz-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() public product: ProductInterface | undefined;
  public discountedPrice: number | undefined;

  ngOnInit() {
    this.discountedPrice = this.calculatedDiscountedPrice();
  }

  public calculatedDiscountedPrice(): number {
    return this.product && this.product.priceDiscounted
      ? Math.floor(((this.product?.price - this.product?.priceDiscounted) * 100) / this.product?.price)
      : 0;
  }
}
