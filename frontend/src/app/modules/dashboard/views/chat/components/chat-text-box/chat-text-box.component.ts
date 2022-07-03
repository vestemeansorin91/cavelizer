import {Component, Input, OnInit} from '@angular/core';
import {ChatContact} from "../../../../../../shared/mock/chat";

@Component({
  selector: 'app-chat-text-box',
  templateUrl: './chat-text-box.component.html',
  styleUrls: ['./chat-text-box.component.scss']
})
export class ChatTextBoxComponent implements OnInit {
  @Input() public contact: ChatContact | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
