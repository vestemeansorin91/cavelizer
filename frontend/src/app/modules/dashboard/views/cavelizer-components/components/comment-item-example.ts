import { Component } from '@angular/core';

@Component({
  selector: 'app-comment-example',
  template: `<mat-expansion-panel expanded="true">
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-comment-example</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Mihai</mat-panel-description>
    </mat-expansion-panel-header>
    <div class="flex flex--wrap gap--16 mb--16">
      <cvz-comment></cvz-comment>
    </div>
  </mat-expansion-panel>`
})
export class CommentExample {}
