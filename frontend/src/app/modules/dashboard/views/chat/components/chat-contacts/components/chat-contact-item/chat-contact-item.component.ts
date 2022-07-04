import {Component, Input} from '@angular/core';
import {ChatContact} from "../../../../../../../../shared/mock/chat";

@Component({
  selector: 'app-chat-contact-item',
  templateUrl: './chat-contact-item.component.html',
  styleUrls: ['./chat-contact-item.component.scss']
})
export class ChatContactItemComponent{
  @Input() public contact: ChatContact = {} as ChatContact;
}
