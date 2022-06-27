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

const ErrorInterceptorService = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};

const HashStrategy = {
  provide: LocationStrategy,
  useClass: HashLocationStrategy,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutesModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
  ],
  providers: [DashboardService, ErrorInterceptorService, HashStrategy],
  bootstrap: [AppComponent],
})
export class AppModule {}