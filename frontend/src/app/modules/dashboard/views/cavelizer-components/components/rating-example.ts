import { Component } from '@angular/core';

@Component({
  selector: 'app-rating-example',
  template: `<mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-rating</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Petrut</mat-panel-description>
    </mat-expansion-panel-header>
      <cvz-rating> </cvz-rating>
  </mat-expansion-panel>`
})
export class RatingExample {}
