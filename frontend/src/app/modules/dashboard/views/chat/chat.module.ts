import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxAutoScrollModule } from 'ngx-auto-scroll';
import { NgxEmojiPickerModule } from 'ngx-emoji-picker';
import { AvatarModule } from '../../../../shared/components/avatar/avatar.module';
import { DefaultImagePipeModule } from '../../../../shared/pipes/default-image/default-image-pipe.module';
import { ChatComponent } from './chat.component';
import { ChatContactsComponent } from './components/chat-contacts/chat-contacts.component';
import { ChatContactItemComponent } from './components/chat-contacts/components/chat-contact-item/chat-contact-item.component';
import { ChatMessagesComponent } from './components/chat-messages/chat-messages.component';
import { ChatTextBoxComponent } from './components/chat-text-box/chat-text-box.component';
import { ChatTopBarComponent } from './components/chat-top-bar/chat-top-bar.component';

const COMPONENTS = [
  ChatComponent,
  ChatContactsComponent,
  ChatMessagesComponent,
  ChatTextBoxComponent,
  ChatTopBarComponent,
  ChatContactItemComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    /* Angular Modules */
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    /* Angular Material Modules */

    /* Cavelizer Modules */
    AvatarModule,
    DefaultImagePipeModule,

    /* Vendors Modules */
    NgxAutoScrollModule,
    NgxEmojiPickerModule
  ]
})
export class ChatModule {}
