import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private notificationsService: NotificationsService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map((res) => {
        return res;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.error.statusCode === 307) {
          this.router.navigate(['/page-not-found']);
        }

        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          this.notificationsService.error(
            'Client error:',
            `${error.error.message}`
          );
        } else {
          this.notificationsService.error(
            'Server error:',
            `[${error.status}] ${error.error.message}`
          );
        }
        return throwError(errorMsg);
      })
    );
  }
}
