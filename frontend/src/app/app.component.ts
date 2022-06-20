import { Component } from '@angular/core';
import { JwtPayload } from 'jwt-decode';
import { AuthService } from './modules/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'frontend';
  token = '';
  tokenDecoded: JwtPayload | undefined = undefined;

  constructor(public authService: AuthService) {}

  reloadToken() {
    this.token = this.authService.token$.value;
    this.tokenDecoded = this.authService.tokenDecoded$.value;
  }
}
