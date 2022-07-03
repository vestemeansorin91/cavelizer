import {Component, Input} from '@angular/core';
import {ChatContact} from "../../../../../../shared/mock/chat";

@Component({
  selector: 'app-chat-top-bar',
  templateUrl: './chat-top-bar.component.html',
  styleUrls: ['./chat-top-bar.component.scss']
})
export class ChatTopBarComponent {
  @Input() public contact: ChatContact = {} as ChatContact;
}
