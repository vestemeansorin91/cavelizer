import { Component, Input } from '@angular/core';
import { ProductInterface } from '../product-item/product.interface';

@Component({
  selector: 'cvz-basket-item',
  templateUrl: 'basket-item.component.html',
  styleUrls: ['basket-item.component.scss']
})
export class BasketItemComponent {
  @Input() public avatar = '';
}
