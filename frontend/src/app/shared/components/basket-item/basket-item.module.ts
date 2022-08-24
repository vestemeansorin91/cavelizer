import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasketItemComponent } from './basket-item.component';
import {IconModule} from "../icon/icon.module";
import {DefaultImagePipeModule} from "../../pipes";

@NgModule({
  declarations: [BasketItemComponent],
  imports: [
    /* Angular Modules */
    CommonModule,
    IconModule,
    DefaultImagePipeModule
    /* Angular Material Modules */
    /* Cavelizer Modules */
  ],
  exports: [BasketItemComponent]
})
export class BasketItemModule {}
