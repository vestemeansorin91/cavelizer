import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const COMPONENTS: any[] = [PageNotFoundComponent];
const SERVICES: any[] = [];
const MODULES: any[] = [FormsModule, ReactiveFormsModule];
const PIPES: any[] = [];
const DIRECTIVES: any[] = [];

@NgModule({
  declarations: [COMPONENTS, PIPES, DIRECTIVES],
  imports: [CommonModule, MODULES],
  providers: [SERVICES],
  exports: [MODULES, COMPONENTS, PIPES, DIRECTIVES, SERVICES],
})
export class SharedModule {}
