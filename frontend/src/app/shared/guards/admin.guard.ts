import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable, of, switchMap} from 'rxjs';
import {StoreStateInterface} from 'src/app/store';
import {isAdminSelector} from '../../modules/auth/store/auth.selectors';

@Injectable({providedIn: 'root'})
export class AdminGuard implements CanActivate {
  constructor(private store: Store<StoreStateInterface>, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(isAdminSelector).pipe(
      switchMap(isAdmin => {
        if (isAdmin) {
          return of(true);
        } else {
          this.router.navigate(['/shop']);
          return of(false);
        }
      })
    );
  }
}
