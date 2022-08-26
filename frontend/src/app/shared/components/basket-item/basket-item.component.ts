import { Component, Input } from '@angular/core';
import { ProductInterface } from '../product-item/product.interface';

@Component({
  selector: 'cvz-basket-item',
  templateUrl: 'basket-item.component.html',
  styleUrls: ['basket-item.component.scss']
})
export class BasketItemComponent {
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
