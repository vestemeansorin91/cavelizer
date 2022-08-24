import {CommonModule, CurrencyPipe} from '@angular/common';
import { NgModule } from '@angular/core';
import { BasketItemComponent } from './basket-item.component';
import {IconModule} from "../icon/icon.module";
import {DefaultImagePipeModule} from "../../pipes";
import {LOCALE_ID} from '@angular/core';
@NgModule({
  declarations: [BasketItemComponent],
  imports: [
    /* Angular Modules */
    CommonModule,
    IconModule,
    /* Angular Material Modules */
    /* Cavelizer Modules */
    DefaultImagePipeModule,
  ],
  exports: [BasketItemComponent]
})
export class BasketItemModule {}
