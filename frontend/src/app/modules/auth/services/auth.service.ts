import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';

const BASE_URL = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class AuthService {
  public token$ = new BehaviorSubject<string>('');
  public tokenDecoded$ = new BehaviorSubject<JwtPayload | undefined>(undefined);

  constructor(private http: HttpClient) {}

  public login(
    body: LoginRequestInterface
  ): Observable<LoginResponseInterface> {
    return this.http
      .post<LoginResponseInterface>(`${BASE_URL}/auth/login`, body)
      .pipe(
        tap((response) => {
          this.token$.next(response.token);

          this.tokenDecoded$.next(jwt_decode(response.token));

          console.log(this.token$.value);
          console.log(this.tokenDecoded$.value);
        })
      );
  }

  public register(
    body: RegisterRequestInterface
  ): Observable<RegisterResponseInterface> {
    return this.http.post<RegisterResponseInterface>(
      `${BASE_URL}/auth/register`,
      body
    );
  }
}

interface LoginRequestInterface {
  username: string;
  password: string;
}

interface LoginResponseInterface {
  token: string;
}

interface RegisterRequestInterface {
  username: string;
  email: string;
  fullName: string;
  password: string;
}

interface RegisterResponseInterface {}

export interface JwtPayload {
  data: {
    _id: string;
    email: string;
    password: string;
    __v: number;
  };
  iat: number;
  exp: number;
}
