import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ChatContact, ChatContactStatusEnum} from "../../../../shared/mock/chat";
import {JwtPayloadInterface} from "../../../../shared/types/jwt-payload.interface";
import {StoreStateInterface} from "../../../../store";
import {getUserSelector} from "../../../auth/store/auth.selectors";
import {ChatService} from "./services/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public currentUser$: Observable<JwtPayloadInterface> = this.store.select(getUserSelector);
  public contacts: ChatContact[] = [];
  public selectedContact: ChatContact;
  public selectedContactIndex = 0; // fixme: I should rely on _id not on index
  public usersOnline: string[] = []; // fixme; should be deleted, same as contacts
  public receiverIsTyping: boolean = false;

  constructor(private chatService: ChatService, private store: Store<StoreStateInterface>) {
  }

  ngOnInit(): void {
    this.chatService.getUsersForChat().subscribe(users => {
      // fixme: stupid map... just for prototype version, should be deleted
      this.contacts = users.map(user => {
        return {
          _id: user._id,
          fullName: user.fullName,
          username: user.username,
          lastMessage: '',
          lastMessageTime: new Date(),
          avatarBlobUrl: user.avatarBlobUrl,
          status: ChatContactStatusEnum.online,
        } as ChatContact;
      })

      this.selectedContact = this.contacts[this.selectedContactIndex];
    })
  }

  public onSelectedContactChanged(index: number) {
    this.selectedContactIndex = index;
    this.selectedContact = this.contacts[this.selectedContactIndex];
  }

  public online(event: string[]): void {
    this.usersOnline = event;
  }
}
