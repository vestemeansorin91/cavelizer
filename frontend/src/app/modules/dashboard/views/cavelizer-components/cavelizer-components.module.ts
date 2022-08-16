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
import {
  BasketItemModule,
  ButtonModule,
  CheckboxModule,
  ChipModule,
  DropdownModule,
  FormElementsModule,
  IconModule,
  InnerTabGroupModule,
  MiniBannerModule,
  ProductItemModule,
  QuoteModule,
  RadioGroupModule,
  RangeSliderModule,
  TagModule,
  ToggleModule
} from '@cavelizer';

import { CavelizerComponentsComponent } from './cavelizer-components.component';
import { BlogItemPreviewExample2 } from './components/blog-item-preview-example2';
import { ButtonExample } from './components/button-example';
import { CheckboxExample } from './components/checkbox-example';
import { ChipExample } from './components/chip-example';
import { DropdownExample } from './components/dropdown-example';
import { InnerTabGroupExample } from './components/inner-tab-group-example';
import { MiniBannerExample } from './components/mini-banner-example';
import { ProductItemExample } from './components/product-item-example';
import { QuoteExample } from './components/quote-example';
import { RadioGroupExample } from './components/radio-group-example';
import { RangeSliderExample } from './components/range-slider-example';
import { TagExample } from './components/tag-example';
import { TextInputExample } from './components/text-input-example';
import { ToggleExample } from './components/toggle-example';
import { TypographyExample } from './components/typography-example';
import {BasketItemExample} from "./components/basket-item-example";

const EXAMPLE_COMPONENTS = [
  CavelizerComponentsComponent,
  BasketItemExample,
  ButtonExample,
  ChipExample,
  DropdownExample,
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
  RadioGroupExample,
  BlogItemPreviewExample2,
  TypographyExample
];

const routes: Routes = [
  {
    path: '',
    component: CavelizerComponentsComponent
  }
];

@NgModule({
  declarations: [EXAMPLE_COMPONENTS, BasketItemExample],
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

    /* Cavelizer Modules */
    BasketItemModule,
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
