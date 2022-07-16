import {Pipe, PipeTransform} from "@angular/core";
import {SidenavItem} from "../types/interfaces/sidenav.interface";

@Pipe({name: 'sidenavItemHasChildren'})
export class SidenavItemHasChildrenPipe implements PipeTransform {
  public transform(sidenavItem: SidenavItem): boolean {
    return !!sidenavItem && !!sidenavItem.submenus && sidenavItem.submenus.length > 0;
  }
}
