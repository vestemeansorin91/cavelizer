import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import {BreadcrumbComponent} from "./components/breadcrumb/breadcrumb.component";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { ButtonComponent } from './components/button/button.component';

const COMPONENTS: any[] = [PageNotFoundComponent, ButtonComponent, BreadcrumbComponent];

const SERVICES: any[] = [];

const MODULES: any[] = [FormsModule, ReactiveFormsModule, RouterModule];

const ANGULAR_MATERIAL_MODULES = [MatSidenavModule, MatIconModule, MatListModule, MatTabsModule, MatExpansionModule];

const PIPES: any[] = [];

const DIRECTIVES: any[] = [];

@NgModule({
  declarations: [COMPONENTS, PIPES, DIRECTIVES],
  imports: [CommonModule, MODULES, ANGULAR_MATERIAL_MODULES],
  providers: [SERVICES],
  exports: [MODULES, COMPONENTS, PIPES, DIRECTIVES, SERVICES, ANGULAR_MATERIAL_MODULES]
})
export class SharedModule {}
