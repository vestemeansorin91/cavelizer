import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DefaultImagePipeModule } from '../../pipes/default-image/default-image-pipe.module';
import { RadioGroupComponent } from './radio-group.component';
import { RadioItemComponent } from './radio-item/radio-item.component';

@NgModule({
  declarations: [RadioGroupComponent, RadioItemComponent],
  imports: [CommonModule, DefaultImagePipeModule],
  exports: [RadioGroupComponent, RadioItemComponent]
})
export class RadioGroupModule {}
