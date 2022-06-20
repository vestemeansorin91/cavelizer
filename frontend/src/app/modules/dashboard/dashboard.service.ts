import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {}

  public getClient() {
    return this.http.get('http://localhost:3333/api/users');
  }
}
