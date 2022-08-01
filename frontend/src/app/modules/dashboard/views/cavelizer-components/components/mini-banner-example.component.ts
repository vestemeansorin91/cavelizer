import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-banner-example',
  template: `<mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-mini-banner</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Mihai</mat-panel-description>
    </mat-expansion-panel-header>

    <cvz-mini-banner>
      <ng-container subtitle>Banner subfocus</ng-container>
      <ng-container title>Space for heading</ng-container>
      <ng-container action> Read recepies </ng-container>
    </cvz-mini-banner>
  </mat-expansion-panel>`
})
export class MiniBannerExampleComponent {}
