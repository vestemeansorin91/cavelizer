import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ForgotPasswordPayloadInterface, ResetPasswordPayloadInterface, SignInPayloadInterface, SignInResponseInterface, SignUpPayloadInterface } from '../types';

const API = environment.apiUrl + '/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  public signIn(signIn: SignInPayloadInterface): Observable<SignInResponseInterface> {
    return this.http.post<SignInResponseInterface>(`${API}/login`, { ...signIn });
  }

  public signUp(signUp: SignUpPayloadInterface): Observable<SignUpPayloadInterface> {
    return this.http.post<SignUpPayloadInterface>(`${API}/register`, { ...signUp });
  }
  public forgotPassword(user: ForgotPasswordPayloadInterface): Observable<any> {
    return this.http.post<any>(API, { user });
  }

  public resetPassword(user: ResetPasswordPayloadInterface): Observable<any> {
    return this.http.post<any>(API, { user });
  }
}
