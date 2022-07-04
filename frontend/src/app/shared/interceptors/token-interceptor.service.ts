import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {JWTTokenService} from "../../modules/auth/services/jwt-token.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public jwtTokenService: JWTTokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.jwtTokenService.accessToken;

    if(token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.jwtTokenService.accessToken}`
        }
      });
    }
    return next.handle(request);
  }
}
