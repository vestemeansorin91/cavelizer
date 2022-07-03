import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";
import {Observable} from "rxjs";
import {UserInterface} from "../../../../../shared/types/user.interface";

const API = environment.apiUrl + '/users';


@Injectable({providedIn: 'root'})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(API);
  }
}
