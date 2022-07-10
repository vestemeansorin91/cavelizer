import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";

const BASE_URL = environment.apiUrl + '/users';

@Injectable({providedIn: 'root'})
export class ProfileService {
  public profile: any = null;
  public userId = '';

  constructor(private http: HttpClient) {
  }

  public getUserByIdWithProfile(userId: string) {
    this.userId = userId;
    return this.http.get(`${BASE_URL}/${userId}/getUserByIdWithProfile`)
  }
}
