import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

interface User {}

@Injectable({ providedIn: 'root' })
export class JwtService {
  public user$ = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) {}
}
