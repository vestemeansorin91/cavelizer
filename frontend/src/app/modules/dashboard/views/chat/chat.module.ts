import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AvatarModule, DefaultImagePipeModule, IconModule } from '@cavelizer';
import { NgxAutoScrollModule } from 'ngx-auto-scroll';

import { ChatComponent } from './chat.component';
import { ChatContactsComponent } from './components/chat-contacts/chat-contacts.component';
import { ChatContactItemComponent } from './components/chat-contacts/components/chat-contact-item/chat-contact-item.component';
import { ChatMessagesComponent } from './components/chat-messages/chat-messages.component';
import { ChatTextBoxComponent } from './components/chat-text-box/chat-text-box.component';
import { ChatTopBarComponent } from './components/chat-top-bar/chat-top-bar.component';

const COMPONENTS = [
  ChatComponent,
  ChatContactsComponent,
  ChatContactItemComponent,
  ChatMessagesComponent,
  ChatTextBoxComponent,
  ChatTopBarComponent
];

const routes: Routes = [
  {
    path: '',
    component: ChatComponent
  }
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    /* Angular Modules */
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),

    /* Angular Material Modules */

    /* Cavelizer Modules */
    AvatarModule,
    DefaultImagePipeModule,
    IconModule,

    /* Vendors Modules */
    NgxAutoScrollModule
    // NgxEmojiPickerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ChatModule {}
