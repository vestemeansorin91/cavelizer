import {Component, Input} from '@angular/core';
import {ChatContact} from "../../../../../../shared/mock/chat";

@Component({
  selector: 'app-chat-text-box',
  templateUrl: './chat-text-box.component.html',
  styleUrls: ['./chat-text-box.component.scss']
})
export class ChatTextBoxComponent {
  @Input() public contact: ChatContact = {} as ChatContact;
}
