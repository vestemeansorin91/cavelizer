import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

const BASE_URL = environment.apiUrl + '/users';
@Injectable({ providedIn: 'root' })
export class ProfileService {
  public profile: any = null;
  public userId = '';

  constructor(private http: HttpClient) {}

  public uploadAvatar(fileToUpload: File | any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('avatar', fileToUpload, fileToUpload.name);
    return this.http.post<any>(`${BASE_URL}/${this.userId}/uploadAvatar`, formData);
  }

  /* This is to get all user profile */
  public getUserByIdWithProfile(userId: string) {
    this.userId = userId;
    return this.http.get(`${BASE_URL}/${userId}/getUserByIdWithProfile`);
  }

  /* This you should implement for bank details, clothes sizes, emergency contact etc */
  public saveUserPublicProfile(payload: any) {
    return this.http.patch(`${BASE_URL}/${this.userId}/updatePublicProfile`, payload);
  }

  public saveUserClothesSizes(payload: any) {
    return this.http.patch(`${BASE_URL}/${this.userId}/updateClothesSizes`, payload);
  }

  public saveUserEmergencyContact(payload: any) {
    return this.http.patch(`${BASE_URL}/${this.userId}/updateEmergencyContact`, payload);
  }

  public saveUserPersonalData(payload: any) {
    return this.http.patch(`${BASE_URL}/${this.userId}/updatePersonalData`, payload);
  }

  public saveUserPayrollInformation(payload: any) {
    return this.http.patch(`${BASE_URL}/${this.userId}/updatePayrollInformation`, payload);
  }
}
