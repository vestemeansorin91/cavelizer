import {Directive, HostBinding} from "@angular/core";

@Directive({selector: '[dropdownItem]'})
export class DropdownItemDirective {
  @HostBinding('class') public className = 'dropdown-panel--item';
}
