import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefaultImagePipeModule } from '../../pipes/default-image/default-image-pipe.module';
import { QuoteComponent } from './quote.component';

@NgModule({
  declarations: [QuoteComponent],
  imports: [
    /* Angular Modules */
    CommonModule,

    /* Angular Material Modules */
    /* Cavelizer Modules */
    DefaultImagePipeModule
  ],
  exports: [QuoteComponent]
})
export class QuoteModule {}
