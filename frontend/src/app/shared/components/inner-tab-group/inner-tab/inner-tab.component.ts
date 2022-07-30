import { Component, Input, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { TabGroupBase } from '../tab-group.base';

@Component({
  selector: 'cvz-inner-tab',
  templateUrl: './inner-tab.component.html'
})
export class InnerTabComponent {
  @Input() public tabTitle: string;
  @Input() public urlTree: string[] = [];
  @Input() public counter: number | null = null;

  constructor(@Optional() private group: TabGroupBase, private router: Router) {}

  get active() {
    return this.group ? this.group.isActive(this) : false;
  }

  onClick() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.urlTree && this.router.navigate(this.urlTree);
  }
}
