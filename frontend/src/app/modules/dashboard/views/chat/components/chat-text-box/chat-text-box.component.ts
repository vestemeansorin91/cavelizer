import {Component, Input} from '@angular/core';
// @ts-ignore
import io from 'socket.io-client';
import {environment} from "../../../../../../../environments/environment";
import {ChatContact} from "../../../../../../shared/mock/chat";
import {JwtPayloadInterface} from "../../../../../../shared/types/jwt-payload.interface";
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'app-chat-text-box',
  templateUrl: './chat-text-box.component.html',
  styleUrls: ['./chat-text-box.component.scss']
})
export class ChatTextBoxComponent {
  @Input() public receiver: ChatContact = {} as ChatContact;
  @Input() public currentUser: JwtPayloadInterface | any;

  public typingMessage: any;
  public message = '';
  public socket: any;

  constructor(private chatService: ChatService) {
    this.socket = io(environment.baseUrl);
  }

  toggled: boolean = false;
  handleSelection(event: any) {
    this.message += event.char;
  }

  public sendMessage() {
    console.log(this.receiver)
    if (this.message) {
      this.chatService.sendMessage(this.currentUser._id, this.receiver._id, this.receiver.username, this.message).subscribe((_) => {
        this.socket.emit('refresh', {});
        this.message = '';
      });
    }
  }

  public isTyping(): void {
    this.socket.emit('start_typing', {
      sender: this.currentUser.username,
      receiver: this.receiver.fullName
    });

    if (this.typingMessage) {
      clearTimeout(this.typingMessage);
    }

    this.typingMessage = setTimeout(() => {
      this.socket.emit('stop_typing', {
        sender: this.currentUser.username,
        receiver: this.receiver.fullName
      });
    }, 500);
  }
}
