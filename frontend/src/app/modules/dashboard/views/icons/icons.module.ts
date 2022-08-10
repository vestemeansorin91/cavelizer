import { ClipboardModule } from '@angular/cdk/clipboard';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { IconModule } from '@cavelizer';
import { IconsComponent } from './icons.component';

@NgModule({
  declarations: [IconsComponent],
  imports: [
    /* Angular Modules */
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: IconsComponent
      }
    ]),

    /* Angular Material Modules */
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ClipboardModule,
    OverlayModule,

    /* Cavelizer Modules */
    IconModule
  ],
  exports: [IconsComponent]
})
export class IconsModule {}
