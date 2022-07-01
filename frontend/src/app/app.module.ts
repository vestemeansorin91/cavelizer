import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardService } from './modules/dashboard/dashboard.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ErrorInterceptor } from './shared/services/error-interceptor.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { effects, metaReducers, reducers, strictStateChecks } from './store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

const ErrorInterceptorService = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};

const HashStrategy = {
  provide: LocationStrategy,
  useClass: HashLocationStrategy
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutesModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: strictStateChecks,
        strictActionImmutability: strictStateChecks,
        strictStateSerializability: false,
        strictActionSerializability: false,
        strictActionWithinNgZone: strictStateChecks,
        strictActionTypeUniqueness: strictStateChecks
      }
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: strictStateChecks,
      autoPause: true
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [DashboardService, ErrorInterceptorService, HashStrategy],
  bootstrap: [AppComponent]
})
export class AppModule {}
