import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NgxEmojiPickerModule } from 'ngx-emoji-picker';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes';
import { DashboardService } from './modules/dashboard/dashboard.service';
import { ErrorInterceptor } from './shared/interceptors/error-interceptor.service';
import { TokenInterceptor } from './shared/interceptors/token-interceptor.service';
import { effects, metaReducers, reducers, strictStateChecks } from './store';

const ErrorInterceptorService = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};

const TokenInterceptorService = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
};

const HashStrategy = {
  provide: LocationStrategy,
  useClass: HashLocationStrategy
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    /* Angular Modules */
    AppRoutesModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,

    /* Angular Material Modules */
    /* Vendors Modules*/
    SimpleNotificationsModule.forRoot({
      showProgressBar: true,
      timeOut: 3000,
      preventDuplicates: true
    }),
    NgxEmojiPickerModule.forRoot(),

    /* NGRX Modules*/
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
  providers: [DashboardService, ErrorInterceptorService, TokenInterceptorService, HashStrategy],
  bootstrap: [AppComponent]
})
export class AppModule {}
