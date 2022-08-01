import { Options } from '@angular-slider/ngx-slider';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cvz-range-slider',
  templateUrl: './range-slider.component.html'
})
export class RangeSliderComponent {
  @Input() public minValue: number = 0;
  @Input() public maxValue: number = 0;
  @Input() public options: Options = {} as Options;
}
