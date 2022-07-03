import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NotificationsService } from 'angular2-notifications';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { JwtPayloadInterface } from 'src/app/shared/types/jwt-payload.interface';
import { AuthService } from '../services/auth.service';
import { JWTTokenService } from '../services/jwt-token.service';
import { getCurrentUser, getCurrentUserFailure, getCurrentUserSuccess } from './auth.actions';

import { authActions } from './index';

@Injectable()
export class AuthEffects {
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.signIn),
      switchMap(({ username, password }) =>
        this.service
          .signIn({
            username,
            password
          })
          .pipe(
            map(({ accessToken }) => authActions.signInSuccess({ accessToken })),
            catchError((errorResponse: HttpErrorResponse) => of(authActions.signInFailure({ errors: errorResponse.error })))
          )
      )
    )
  );

  saveCurrentUserOnSignInSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.signInSuccess),
        tap(({ accessToken }) => {
          this.jwtTokenService.setCurrentUser(accessToken);

          const currentUser: JwtPayloadInterface = this.jwtTokenService.getUser();
          this.store.dispatch(authActions.getCurrentUserSuccess({ currentUser }));
          this.notificationsService.success('Success!', `Welcome back ${currentUser.fullName}`);

          this.router.navigate(['/dashboard/panel']).then(_ => null);
        })
      ),
    { dispatch: false }
  );

  signUp$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.signUp),
        switchMap(response => {
          console.log(response)
          return this.service.signUp(response.payload)
        }),
        tap(async () => {
          this.router.navigate(['/auth/login']).then(_ => null);
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          console.log(errorResponse);
          this.notificationsService.error('Eroare', errorResponse.error.message);
          return of({ errors: errorResponse.error });
        })
      ),
    { dispatch: false }
  );

  forgotPassword$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.forgotPassword),
        tap(async () => {
          this.router.navigate(['/auth/reset-password']).then(_ => null);
        })
      ),
    { dispatch: false }
  );

  resetPassword$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.resetPassword),
        tap(async () => {
          this.router.navigate(['/auth/login']).then(_ => null);
        })
      ),
    { dispatch: false }
  );

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUser),
      map(() => {
        this.jwtTokenService.initializeToken();
        const currentUser: JwtPayloadInterface = this.jwtTokenService.getUser();

        return getCurrentUserSuccess({ currentUser });
      }),
      catchError((errorResponse: HttpErrorResponse) => of(getCurrentUserFailure({ errors: errorResponse.error })))
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.logoutAction),
        tap(() => {
          this.jwtTokenService.removeAccessToken();
          this.jwtTokenService.removeCurrentUser();
          this.router.navigate(['/auth/login']);
          this.notificationsService.success('Success!', `You've been delogged!`);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private service: AuthService,
    private router: Router,
    private jwtTokenService: JWTTokenService,
    private store: Store,
    private notificationsService: NotificationsService
  ) {}
}
