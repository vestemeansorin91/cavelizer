import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {environment} from "../../../../../../environments/environment";

const BASEURL = `${environment.apiUrl}/chat`;

@Injectable({
  providedIn: "root",
})
export class ChatService {
  constructor(private http: HttpClient) {}

  public getMessages(senderId: string, receiverId: string): Observable<any> {
    return this.http.get(`${BASEURL}/chat-messages/${senderId}/${receiverId}`);
  }

  public markMessages(sender: string, receiver: string): Observable<any> {
    return this.http.get(`${BASEURL}/receiver-messages/${sender}/${receiver}`);
  }

  public markAllMessages(): Observable<any> {
    return this.http.get(`${BASEURL}/mark-all-messages`);
  }

  public getUserByUsername(username: string): Observable<any> {
    return this.http.get(`${BASEURL}/username/${username}`);
  }

  public sendMessage(
    senderId: string,
    receiverId: string,
    receiverName: string,
    message: string
  ): Observable<any> {
    return this.http.post(`${BASEURL}/chat-messages/${senderId}/${receiverId}`, {
      receiverId,
      receiverName,
      message,
    });
  }
}
