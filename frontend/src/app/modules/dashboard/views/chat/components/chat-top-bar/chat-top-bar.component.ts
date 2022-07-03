import {Component, Input, OnInit} from '@angular/core';
import {ChatContact} from "../../../../../../shared/mock/chat";

@Component({
  selector: 'app-chat-top-bar',
  templateUrl: './chat-top-bar.component.html',
  styleUrls: ['./chat-top-bar.component.scss']
})
export class ChatTopBarComponent implements OnInit {
  @Input() public contact: ChatContact | undefined;

  ngOnInit(): void {
  }

}
