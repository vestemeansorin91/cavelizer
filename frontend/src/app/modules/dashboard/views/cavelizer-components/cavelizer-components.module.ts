import { ClipboardModule } from '@angular/cdk/clipboard';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from '../../../../shared/components/button/button.module';
import { CheckboxModule } from '../../../../shared/components/checkbox/checkbox.module';
import { ChipModule } from '../../../../shared/components/chip/chip.module';
import { DropdownModule } from '../../../../shared/components/dropdown/dropdown.module';
import { FormElementsModule } from '../../../../shared/components/form-elements/form-elements.module';
import { IconModule } from '../../../../shared/components/icon/icon.module';
import { InnerTabGroupModule } from '../../../../shared/components/inner-tab-group/inner-tab-group.module';
import { MiniBannerModule } from '../../../../shared/components/mini-banner/mini-banner.module';
import { ProductItemModule } from '../../../../shared/components/product-item/product-item.module';
import { QuoteModule } from '../../../../shared/components/quote/quote.module';
import { RadioGroupModule } from '../../../../shared/components/radio-group/radio-group.module';
import { RangeSliderModule } from '../../../../shared/components/range-slider/range-slider.module';
import { TagModule } from '../../../../shared/components/tag/tag.module';
import { ToggleModule } from '../../../../shared/components/toggle/toggle.module';
import { CavelizerComponentsComponent } from './cavelizer-components.component';
import { ButtonExample } from './components/button-example';
import { CheckboxExample } from './components/checkbox-example';
import { ChipExample } from './components/chip-example';
import { DropdownExample } from './components/dropdown-example';
import { IconsExample } from './components/icons-example';
import { InnerTabGroupExample } from './components/inner-tab-group-example';
import { MiniBannerExample } from './components/mini-banner-example';
import { ProductItemExample } from './components/product-item-example';
import { QuoteExample } from './components/quote-example';
import { RadioGroupExample } from './components/radio-group-example';
import { RangeSliderExample } from './components/range-slider-example';
import { TagExample } from './components/tag-example';
import { TextInputExample } from './components/text-input-example';
import { ToggleExample } from './components/toggle-example';

const EXAMPLE_COMPONENTS = [
  CavelizerComponentsComponent,
  ButtonExample,
  ChipExample,
  DropdownExample,
  IconsExample,
  InnerTabGroupExample,
  MiniBannerExample,
  ProductItemExample,
  QuoteExample,
  CheckboxExample,
  TagExample,
  TextInputExample,
  ToggleExample,
  RangeSliderExample,
  TagExample,
  RadioGroupExample
];

const routes: Routes = [
  {
    path: '',
    component: CavelizerComponentsComponent
  }
];

@NgModule({
  declarations: [EXAMPLE_COMPONENTS],
  imports: [
    /* Angular Modules */
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),

    /* Angular Material Modules */
    MatExpansionModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    ClipboardModule,
    OverlayModule,

    /* Cavelizer Modules */
    ButtonModule,
    CheckboxModule,
    ChipModule,
    DropdownModule,
    IconModule,
    InnerTabGroupModule,
    MiniBannerModule,
    ProductItemModule,
    QuoteModule,
    RadioGroupModule,
    RangeSliderModule,
    TagModule,
    FormElementsModule,
    ToggleModule
  ]
})
export class CavelizerComponentsModule {}
