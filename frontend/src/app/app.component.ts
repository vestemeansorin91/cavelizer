import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs";
import {authActions} from './modules/auth/store';
import {isAdminSelector} from "./modules/auth/store/auth.selectors";
import {StoreStateInterface} from "./store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public isAdmin$: Observable<boolean> = this.store.select(isAdminSelector);

  constructor(private router: Router, private store: Store<StoreStateInterface>) {
  }

  ngOnInit() {
    this.store.dispatch(authActions.getCurrentUser());
  }
}
