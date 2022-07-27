import { Component, Input } from '@angular/core';

@Component({
  selector: 'cavelizer-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})

export class ProductItemComponent {
  @Input() public avatar = '';
}
