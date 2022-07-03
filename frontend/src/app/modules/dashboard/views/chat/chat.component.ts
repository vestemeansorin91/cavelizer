import { Component, OnInit } from '@angular/core';
import {ChatContact, generateRandomContact} from "../../../../shared/mock/chat";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public contacts: ChatContact[] = [];
  public selectedContact: ChatContact = {} as ChatContact;
  public selectedContactIndex = 0;

  public usersOnline: string[] = [];

  ngOnInit(): void {
    this.generateFakeContacts();
    this.selectedContact = this.contacts[this.selectedContactIndex];
  }

  public onSelectedContactChanged(index:number) {
    this.selectedContactIndex = index;
    this.selectedContact = this.contacts[this.selectedContactIndex];
  }

  public online(event: string[]): void {
    this.usersOnline = event;
  }

  private generateFakeContacts() {
    Array.from({ length: 10 }).forEach(() =>this.contacts.push(generateRandomContact()));
  }
}
