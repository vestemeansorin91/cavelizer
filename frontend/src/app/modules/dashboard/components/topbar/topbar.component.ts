import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {JwtPayloadInterface} from "../../../../shared/types/jwt-payload.interface";
import {StoreStateInterface} from "../../../../store";
import {getUserSelector} from "../../../auth/store/auth.selectors";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  public currentUser$: Observable<JwtPayloadInterface | null> = this.store.select(getUserSelector);

  constructor(private store: Store<StoreStateInterface>) {
  }
}
