import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../../../../../environments/environment";
import {UserInterface} from "../../../../../shared/types/user.interface";
import {SendMessageResponseInterface} from "../types/send-message-response.interface";

const BASEURL = `${environment.apiUrl}/chat`;

@Injectable({
  providedIn: "root",
})
export class ChatService {
  constructor(private http: HttpClient) {}

  public getUsersForChat(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`${BASEURL}/getUsersForChat`);
  }

  public getMessages(senderId: string, receiverId: string): Observable<any> {
    return this.http.get(`${BASEURL}/chatMessages/${senderId}/${receiverId}/getMessages`);
  }

  public markReceiverMessages(sender: string, receiver: string): Observable<any> {
    return this.http.get(`${BASEURL}/receiverMessages/${sender}/${receiver}/markReceiverMessages`);
  }

  public markAllMessages(): Observable<any> {
    return this.http.get(`${BASEURL}/markAllMessages`);
  }

  public sendMessage(
    senderId: string,
    receiverId: string,
    receiverName: string,
    message: string
  ): Observable<SendMessageResponseInterface> {
    return this.http.post<SendMessageResponseInterface>(`${BASEURL}/chatMessages/${senderId}/${receiverId}/sendMessage`, {
      receiverId,
      receiverName,
      message,
    });
  }
}
