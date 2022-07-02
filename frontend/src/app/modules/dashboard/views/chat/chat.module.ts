import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ChatComponent} from "./chat.component";
import {ChatContactsComponent} from "./components/chat-contacts/chat-contacts.component";
import {
  ChatContactItemComponent
} from "./components/chat-contacts/components/chat-contact-item/chat-contact-item.component";
import {ChatMessagesComponent} from "./components/chat-messages/chat-messages.component";
import {ChatTextBoxComponent} from "./components/chat-text-box/chat-text-box.component";
import {ChatTopBarComponent} from "./components/chat-top-bar/chat-top-bar.component";

const COMPONENTS = [ChatComponent, ChatContactsComponent, ChatMessagesComponent, ChatTextBoxComponent, ChatTopBarComponent, ChatContactItemComponent]

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule],
})

export class ChatModule {
}