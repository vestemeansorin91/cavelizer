import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {UserInterface} from "../types/user.interface";

const API = environment.apiUrl + '/users';

@Injectable({providedIn: 'root'})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(API);
  }

  public getUserById(id: string) {
    return this.http.get<UserInterface>(`${API}/${id}/getUserById`);
  }

  public getUserByUsername(username: string): Observable<{ user: UserInterface }> {
    return this.http.get<{ user: UserInterface }>(`${API}/${username}/getUserByUsername`);
  }
}
