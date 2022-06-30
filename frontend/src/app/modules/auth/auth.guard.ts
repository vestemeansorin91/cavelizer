import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, switchMap } from 'rxjs';
import { StoreStateInterface } from 'src/app/store';
import { isLoggedInSelector } from './store/auth.selectors';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private store: Store<StoreStateInterface>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('guard');
    return this.store.select(isLoggedInSelector).pipe(
      switchMap(isLoggedIn => {
        if (isLoggedIn) {
          return of(true);
        } else {
          this.router.navigate(['/auth', 'login']);
          return of(false);
        }
      })
    );
  }
}
