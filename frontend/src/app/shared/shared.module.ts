import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterModule} from "@angular/router";
import {BreadcrumbComponent} from "./components/breadcrumb/breadcrumb.component";
import {ButtonComponent} from './components/button/button.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {DefaultImagePipe} from "./pipes/default-image.pipe";

const COMPONENTS: any[] = [PageNotFoundComponent, ButtonComponent, BreadcrumbComponent];

const SERVICES: any[] = [];

const MODULES: any[] = [FormsModule, ReactiveFormsModule, RouterModule];

const ANGULAR_MATERIAL_MODULES = [MatSidenavModule, MatIconModule, MatListModule, MatTabsModule, MatExpansionModule];

const PIPES: any[] = [DefaultImagePipe];

const DIRECTIVES: any[] = [];

@NgModule({
  declarations: [COMPONENTS, PIPES, DIRECTIVES],
  imports: [CommonModule, MODULES, ANGULAR_MATERIAL_MODULES],
  providers: [SERVICES],
  exports: [MODULES, COMPONENTS, PIPES, DIRECTIVES, SERVICES, ANGULAR_MATERIAL_MODULES]
})
export class SharedModule {}
