import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChatContact} from "../../../../../../shared/mock/chat";

@Component({
  selector: 'app-chat-contacts',
  templateUrl: './chat-contacts.component.html',
  styleUrls: ['./chat-contacts.component.scss']
})
export class ChatContactsComponent{
  @Input() public contacts: ChatContact[] = [];
  @Input() public selectedContactIndex = 0;
  @Output() public contactSelectionChange: EventEmitter<number> = new EventEmitter<number>();
}
