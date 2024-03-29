import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-item-preview-example',
  template: `<mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-blog-item-preview-example</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Mihai</mat-panel-description>
    </mat-expansion-panel-header>
    <div class="flex flex--wrap gap--16 mb--16">
      <cvz-blog-preview></cvz-blog-preview>
    </div>
  </mat-expansion-panel>`
})
export class BlogItemPreviewExample {}
