import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authActions } from './modules/auth/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(authActions.getCurrentUser());
  }
}
