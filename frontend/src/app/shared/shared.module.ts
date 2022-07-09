import {OverlayModule} from '@angular/cdk/overlay';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from "@angular/material/tooltip";
import {RouterModule} from '@angular/router';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {ButtonComponent} from './components/button/button.component';
import {DropdownItemDirective} from './components/dropdown/dropdown-item.directive';
import {DropdownTriggerForDirective} from './components/dropdown/dropdown-trigger-for.directive';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {IconComponent} from "./components/icon/icon.component";
import {MiniBannerComponent} from './components/mini-banner/mini-banner.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {DefaultImagePipe} from './pipes/default-image.pipe';
import {ClipboardModule} from '@angular/cdk/clipboard';

const COMPONENTS: any[] = [
  PageNotFoundComponent,
  ButtonComponent,
  BreadcrumbComponent,
  MiniBannerComponent,
  DropdownComponent,
  IconComponent];

const SERVICES: any[] = [];

const MODULES: any[] = [
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  OverlayModule
];

const ANGULAR_MATERIAL_MODULES = [
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatExpansionModule,
  MatTooltipModule,
  ClipboardModule,
];

const PIPES: any[] = [DefaultImagePipe];

const DIRECTIVES: any[] = [DropdownTriggerForDirective, DropdownItemDirective];

@NgModule({
  declarations: [COMPONENTS, PIPES, DIRECTIVES],
  imports: [CommonModule, MODULES, ANGULAR_MATERIAL_MODULES],
  providers: [SERVICES],
  exports: [MODULES, COMPONENTS, PIPES, DIRECTIVES, SERVICES, ANGULAR_MATERIAL_MODULES]
})
export class SharedModule {
}
