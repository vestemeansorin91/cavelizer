import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CavelizerComponentsComponent } from './cavelizer-components.component';
import { ButtonExampleComponent } from './components/button-example.component';
import { CheckboxExampleComponent } from './components/checkbox-example.component';
import { ChipExampleComponent } from './components/chip-example.component';
import { DropdownExampleComponent } from './components/dropdown-example.component';
import { IconsExampleComponent } from './components/icons-example.component';
import { InnerTabGroupExampleComponent } from './components/inner-tab-group-example.component';
import { MiniBannerExampleComponent } from './components/mini-banner-example.component';
import { QuoteExampleComponent } from './components/quote-example.component';
import { RadioGroupExampleComponent } from './components/radio-group-example.component';
import { RangeSliderComponent } from './components/range-slider.component';
import { TagExampleComponent } from './components/tag-example.component';
import { TextInputExampleComponent } from './components/text-input-example.component';
import { ToggleExampleComponent } from './components/toggle-example.component';

const COMPONENTS = [
  CavelizerComponentsComponent,
  ButtonExampleComponent,
  DropdownExampleComponent,
  MiniBannerExampleComponent,
  IconsExampleComponent,
  InnerTabGroupExampleComponent,
  QuoteExampleComponent,
  ChipExampleComponent,
  CheckboxExampleComponent,
  TextInputExampleComponent,
  ToggleExampleComponent,
  RangeSliderComponent,
  TagExampleComponent,
  RadioGroupExampleComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, SharedModule]
})
export class CavelizerComponentsModule {}
