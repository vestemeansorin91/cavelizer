import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {authActions} from 'src/app/modules/auth/store';
import {getUserSelector} from 'src/app/modules/auth/store/auth.selectors';
import {JwtPayloadInterface} from 'src/app/shared/types/jwt-payload.interface';
import {StoreStateInterface} from 'src/app/store';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Output() expanded = new EventEmitter<boolean>();
  @Input() isExpanded = false;
  public currentUser$: Observable<JwtPayloadInterface | null> = this.store.select(getUserSelector);

  constructor(private store: Store<StoreStateInterface>) {}

  public logout() {
    this.store.dispatch(authActions.logoutAction());
  }
}
