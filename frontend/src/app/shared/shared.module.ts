import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from './components/breadcrumb/breadcrumb.module';
import { ButtonModule } from './components/button/button.module';
import { CheckboxModule } from './components/checkbox/checkbox.module';
import { ChipModule } from './components/chip/chip.module';
import { DropdownItemDirective } from './components/dropdown/dropdown-item.directive';
import { DropdownTriggerForDirective } from './components/dropdown/dropdown-trigger-for.directive';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { InputGroupModule } from './components/form-elements/input-group/input-group.module';
import { InputTextModule } from './components/form-elements/input-text/input-text.module';
import { LabelModule } from './components/form-elements/label/label.module';
import { IconModule } from './components/icon/icon.module';
import { InnerTabGroupModule } from './components/inner-tab-group/inner-tab-group.module';
import { MiniBannerModule } from './components/mini-banner/mini-banner.module';
import { QuoteModule } from './components/quote/quote.module';
import { RadioGroupModule } from './components/radio-group/radio-group.module';
import { TagModule } from './components/tag/tag.module';
import { ToggleModule } from './components/toggle/toggle.module';

import { TooltipModule } from './components/tooltip/tooltip.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DefaultImagePipeModule } from './pipes/default-image/default-image-pipe.module';
import { PhoneFormatPipeModule } from './pipes/phone-format/phone-format-pipe.module';

const COMPONENTS: any[] = [
  PageNotFoundComponent,
  DropdownComponent // Todo: Need another implementation
];

const COMPONENTS_MODULES: any[] = [
  BreadcrumbModule,
  ButtonModule,
  CheckboxModule,
  ChipModule,
  InputGroupModule,
  LabelModule,
  InputTextModule,
  IconModule,
  InnerTabGroupModule,
  MiniBannerModule,
  QuoteModule,
  TagModule,
  ToggleModule,
  TooltipModule,
  RadioGroupModule
];

const MODULES: any[] = [FormsModule, ReactiveFormsModule, RouterModule, NgxSliderModule];

const ANGULAR_MATERIAL_MODULES = [
  MatSidenavModule,
  MatTabsModule,
  MatExpansionModule,
  MatTooltipModule,
  MatSelectModule,
  MatInputModule,
  ClipboardModule,
  OverlayModule
];

const PIPES_MODULES: any[] = [DefaultImagePipeModule, PhoneFormatPipeModule];

const DIRECTIVES: any[] = [DropdownTriggerForDirective, DropdownItemDirective];

@NgModule({
  declarations: [COMPONENTS, DIRECTIVES],
  imports: [CommonModule, MODULES, ANGULAR_MATERIAL_MODULES, COMPONENTS_MODULES, PIPES_MODULES],
  exports: [MODULES, COMPONENTS, PIPES_MODULES, DIRECTIVES, ANGULAR_MATERIAL_MODULES, COMPONENTS_MODULES]
})
export class SharedModule {}
