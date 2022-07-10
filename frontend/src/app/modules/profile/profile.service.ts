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


  /* This is to get all user profile */
  public getUserByIdWithProfile(userId: string) {
    this.userId = userId;
    return this.http.get(`${BASE_URL}/${userId}/getUserByIdWithProfile`)
  }

  /* This you should implement for bank details, clothes sizes, emergency contact etc */
  public saveUserPublicProfile(payload:any) {
    return this.http.patch(`${BASE_URL}/${this.userId}/updatePublicProfile`, payload)
  }
}
