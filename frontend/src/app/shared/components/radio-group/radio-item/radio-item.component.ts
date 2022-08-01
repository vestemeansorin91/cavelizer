import { Component, HostListener, Input, Optional } from '@angular/core';
import { RadioGroupComponent } from '../radio-group.component';
import { RadioItemBase } from '../radio-item.base';

@Component({
  selector: 'cvz-radio-item',
  templateUrl: './radio-item.component.html',
  styleUrls: ['./radio-item.component.scss'],
  providers: [{ provide: RadioItemBase, useExisting: RadioItemComponent }]
})
export class RadioItemComponent {
  @Input() public value: any;
  @Input() public isActive: boolean = false;

  constructor(@Optional() private radioGroupComponent: RadioGroupComponent) {}

  @HostListener('click', ['$event'])
  public onClick(e: any): void {
    if (this.radioGroupComponent) {
      this.radioGroupComponent.setValue(this.value);
    }
  }

  setActive(active: boolean): void {
    this.isActive = active;
  }
}
