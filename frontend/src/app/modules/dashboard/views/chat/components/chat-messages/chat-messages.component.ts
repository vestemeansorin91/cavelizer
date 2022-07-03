import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChatService} from "../../services/chat.service";
import {environment} from "../../../../../../../environments/environment";
import {Subscription} from "rxjs";
import {StoreStateInterface} from "../../../../../../store";
import {Store} from "@ngrx/store";
import {getUserSelector} from "../../../../../auth/store/auth.selectors";
import {JwtPayloadInterface} from "../../../../../../shared/types/jwt-payload.interface";
import * as _ from 'lodash';
import { Socket } from 'ngx-socket-io';
// import { CaretEvent, EmojiEvent } from 'ng2-emoji-picker';

interface Message {
  _id: string;
  body: string;
  createdAt: Date;
  isRead: boolean;
  receiverId: string;
  receiverName: string;
  senderId: string;
  senderName: string;
}

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() public usersOnline: string[] = [];
  public receiverData: any | undefined;
  public receiverName = '';
  public user: JwtPayloadInterface = {} as JwtPayloadInterface;
  public message = '';
  public socket: any;
  public typingMessage: any;
  public typing = false;
  public messages: Message[] = [];
  public isOnline = false;

  // EMOJI PICKER
  public eventMock: any;
  public eventPosMock: any;
  public toggled = false;
  public content = ' ';

  private subs: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private store: Store<StoreStateInterface>,
    private chatService: ChatService) {
  }

  ngOnInit(): void {
    this.subs.push(
      this.store.select(getUserSelector).subscribe(user => this.user = user),

      this.route.params.subscribe((params) => {
        this.receiverName = params['name'];
        this.getUserByUsername();

        this.socket.fromEvent('refreshPage', () => {
          this.getUserByUsername();
        });
      }))


    this.socket.fromEvent('is_typing', (data: any) => {
      if (data.sender === this.receiverName) {
        this.typing = true;
      }
    });

    this.socket.fromEvent('has_stopped_typing', (data: any) => {
      if (data.sender === this.receiverName) {
        this.typing = false;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['users'] && changes['users'].currentValue.length > 0) {
      const result = _.indexOf(changes['users'].currentValue, this.receiverName);
      if (result > -1) {
        this.isOnline = true;
      } else {
        this.isOnline = false;
      }
    }
  }

  ngAfterViewInit(): void {
    const params = {
      room1: this.user.username,
      room2: this.receiverName
    };

    this.socket.emit('join chat', params);
  }

  public isTyping(): void {
    this.socket.emit('start_typing', {
      sender: this.user.username,
      receiver: this.receiverName
    });

    if (this.typingMessage) {
      clearTimeout(this.typingMessage);
    }

    this.typingMessage = setTimeout(() => {
      this.socket.emit('stop_typing', {
        sender: this.user.username,
        receiver: this.receiverName
      });
    }, 500);
  }

  public getUserByUsername() {
    this.chatService.getUserByUsername(this.receiverName).subscribe((data: any) => {
      this.receiverData = data.result;
      this.getAllMessages(this.user._id, data.result._id);
    });
  }

  public sendMessage() {
    if (this.message) {
      const receiver = this.receiverData;
      this.chatService.sendMessage(this.user._id, receiver._id, receiver.username, this.message).subscribe((data) => {
        this.socket.emit('refresh', {});
        this.message = '';
      });
    }
  }

  public getAllMessages(sender: string, receiver: string) {
    this.chatService.getMessages(sender, receiver).subscribe((data) => {
      this.messages = data.messages.message;
    });
  }

  // TODO
  // public onToggleEmoji(): void {
  //   this.toggled = !this.toggled;
  // }

  // public handleSelection(event: EmojiEvent) {
  //   this.content = this.content.slice(0, 1) + event.char + this.content.slice(1);
  //   this.message += this.content;
  //   this.content = '';
  //   this.eventMock = JSON.stringify(event);
  //   this.toggled = !this.toggled;
  // }

  // public handleCurrentCaret(event: CaretEvent) {
  //   this.eventPosMock = `{ caretOffset : ${event.caretOffset}, caretRange: Range{...}, textContent: ${event.textContent} }`;
  // }
}
