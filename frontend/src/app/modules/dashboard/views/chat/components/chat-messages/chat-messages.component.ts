import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import * as _ from 'lodash';
import {Subscription} from "rxjs";
// @ts-ignore
import io from 'socket.io-client';
import {environment} from "../../../../../../../environments/environment";
import {ChatContact} from "../../../../../../shared/mock/chat";
import {UsersService} from "../../../../../../shared/services/users.service";
import {JwtPayloadInterface} from "../../../../../../shared/types/jwt-payload.interface";
import {StoreStateInterface} from "../../../../../../store";
import {getUserSelector} from "../../../../../auth/store/auth.selectors";
import {ChatService} from "../../services/chat.service";

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
export class ChatMessagesComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() public usersOnline: string[] = [];
  @Input() public receiver: ChatContact;
  @Input() public currentUser: JwtPayloadInterface | any;
  @Output() public receiverIsTyping: EventEmitter<boolean> = new EventEmitter<boolean>();

  public receiverData: any = null;
  public receiverName = '';
  public user: JwtPayloadInterface = {} as JwtPayloadInterface;
  public message = '';
  public typingMessage: any = null;
  public messages: Message[] = [];
  public isOnline = false;

  // EMOJI PICKER
  public eventMock: any = null;
  public eventPosMock: any = null;
  public toggled = false;
  public content = ' ';

  public socket: any;
  private subs: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private store: Store<StoreStateInterface>,
    private chatService: ChatService,
    private usersService: UsersService) {
    this.socket = io(environment.baseUrl);
  }

  ngOnInit(): void {
    this.subs.push(this.store.select(getUserSelector).subscribe(user => this.user = user));
    this.receiverName = this.receiver.username;
    this.getUserByUsername();

    this.socketUserIsTyping();
    this.socketUserStoppedTyping();
    this.socketEmitRefresh();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['users'] && changes['users'].currentValue.length > 0) {
      this.isOnline = (_.indexOf(changes['users'].currentValue, this.receiverName) > -1);
    }
  }

  ngAfterViewInit(): void {
    const params = {
      room1: this.user.username,
      room2: this.receiverName
    };

    this.socket.emit('join chat', params);
  }

  public getUserByUsername() {
      this.usersService.getUserByUsername(this.receiverName).subscribe((data) => {
        this.receiverData = data.user;
        this.getAllMessages(this.user._id, data.user._id);
      });
  }

  public sendMessage() {
    if (this.message ) {
      const receiver = this.receiverData;

      if(this.user._id !== receiver._id) { // Need this extra for 2 windows on same pc
        this.chatService.sendMessage(this.user._id, receiver._id, receiver.username, this.message).subscribe((_) => {
          this.socket.emit('refresh', {});
          this.message = '';
        });
      }
    }
  }

  public getAllMessages(sender: string, receiver: string) {
    this.chatService.getMessages(sender, receiver).subscribe((data) => {
      this.messages = data.message;
    });
  }

  ngOnDestroy() {
    this.socket.removeListener('is_typing');
    this.socket.removeListener('has_stopped_typing');
    this.subs.forEach(s => s.unsubscribe());
  }

  private socketUserIsTyping() {
    this.socket.on('is_typing', (data: any) => {
      if (data.sender === this.receiverName) {
        this.receiverIsTyping.emit(true);
      }
    });
  }

  private socketUserStoppedTyping() {
    this.socket.on('has_stopped_typing', (data: any) => {
      if (data.sender === this.receiverName) {
        this.receiverIsTyping.emit(false);
      }
    });
  }

  private socketEmitRefresh() {
    this.socket.on('refreshPage', () => {
      this.getUserByUsername();
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
