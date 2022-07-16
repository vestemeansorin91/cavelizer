import {Pipe, PipeTransform} from "@angular/core";
import {SidenavItem} from "../types/interfaces/sidenav.interface";

@Pipe({name: 'sidenavSubmenuHeight', pure: false})
export class SidenavSubmenuHeightPipe implements PipeTransform {
  public transform(sidenavItem: SidenavItem): string {
    if (sidenavItem.isSubmenuExpanded && sidenavItem.submenus) {
      return sidenavItem.submenus.length * 50 + 'px';
    } else {
      return '0';
    }
  }
}
