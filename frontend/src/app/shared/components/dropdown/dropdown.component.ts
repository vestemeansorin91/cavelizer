import {Component, EventEmitter, Output, TemplateRef, ViewChild} from '@angular/core';
import {DropdownPanel} from "./dropdown-panel";

@Component({
  selector: 'cavelizer-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent implements DropdownPanel {
  @ViewChild(TemplateRef) public templateRef: TemplateRef<any>;
  @Output() public closed = new EventEmitter<void>();
}
