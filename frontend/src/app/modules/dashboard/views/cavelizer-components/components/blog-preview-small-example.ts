import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-preview-small-example',
  template: `<mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-blog-preview-small-example</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Mihai</mat-panel-description>
    </mat-expansion-panel-header>
    <cvz-blog-preview-small></cvz-blog-preview-small>
  </mat-expansion-panel>`
})
export class BlogPreviewSmallExample {}
