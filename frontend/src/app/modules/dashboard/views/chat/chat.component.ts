import { Component, OnInit } from '@angular/core';
import {ChatContact, generateRandomContact} from "../../../../shared/mock/chat";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public contacts: ChatContact[] = [];
  public selectedContact: ChatContact | undefined;
  public selectedContactIndex = 0;

  ngOnInit(): void {
    this.generateFakeContacts();
    this.selectedContact = this.contacts[this.selectedContactIndex];
  }

  public onSelectedContactChanged(index:number) {
    this.selectedContactIndex = index;
    this.selectedContact = this.contacts[this.selectedContactIndex];
  }

  private generateFakeContacts() {
    Array.from({ length: 10 }).forEach(() =>this.contacts.push(generateRandomContact()));
  }
}
