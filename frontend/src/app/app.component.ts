import { Component, OnInit } from '@angular/core';
import { JwtPayload } from 'jwt-decode';
import { Observable } from 'rxjs';
import { AuthService } from './modules/auth/services/auth.service';
import { DashboardService } from './modules/dashboard/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'frontend';
  token = '';
  tokenDecoded: JwtPayload | undefined = undefined;

  clients$: Observable<any> | undefined;

  constructor(
    public authService: AuthService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.clients$ = this.dashboardService.getClient();
  }

  reloadToken() {
    this.token = this.authService.token$.value;
    this.tokenDecoded = this.authService.tokenDecoded$.value;
  }
}
