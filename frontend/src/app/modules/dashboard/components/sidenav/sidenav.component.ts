import {Location} from "@angular/common";
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {authActions} from 'src/app/modules/auth/store';
import {getUserSelector} from 'src/app/modules/auth/store/auth.selectors';
import {JwtPayloadInterface} from 'src/app/shared/types/jwt-payload.interface';
import {StoreStateInterface} from 'src/app/store';
import {SIDENAV} from "../../mock/sidenav.mock";
import {SidenavItem} from "../../types/interfaces/sidenav.interface";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() expanded = new EventEmitter<boolean>();
  @Input() isExpanded = false;
  public currentUser$: Observable<JwtPayloadInterface | null> = this.store.select(getUserSelector);
  public sidenav: SidenavItem[] = SIDENAV;

  constructor(private store: Store<StoreStateInterface>, public route: ActivatedRoute, private location: Location) {}

  public ngOnInit(): void {
    this.checkIfSubmenuIsActiveOnInit();
  }

  public logout() {
    this.store.dispatch(authActions.logoutAction());
  }

  public toggleSidenav(sidenavItem: SidenavItem) {
    if(!!sidenavItem && !!sidenavItem.submenus && sidenavItem.submenus.length > 0) {
      sidenavItem.isSubmenuExpanded = !sidenavItem.isSubmenuExpanded;
    }
  }

  private checkIfSubmenuIsActiveOnInit() {
    const currentPath = this.location.path();
    for(let sidenavItem of this.sidenav) {
      if(sidenavItem && sidenavItem.submenus && sidenavItem.submenus.length) {
        const submenuPaths = sidenavItem.submenus.map(m => m.pathUrl.join('/'));
        sidenavItem.isSubmenuExpanded = submenuPaths.some(sbMenu => sbMenu === currentPath);
      }
    }
  }
}
