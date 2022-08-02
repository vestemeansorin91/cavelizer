import { Component, Input } from '@angular/core';
import { BannerSetup } from './banner-setup.interface';

@Component({
  selector: 'cvz-mini-banner',
  templateUrl: './mini-banner.component.html',
  styleUrls: ['./mini-banner.component.scss']
})
export class MiniBannerComponent {
  @Input() public banner: BannerSetup;
}
