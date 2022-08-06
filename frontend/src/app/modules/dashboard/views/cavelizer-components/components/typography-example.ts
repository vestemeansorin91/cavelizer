import { Component } from '@angular/core';

@Component({
  selector: 'app-typography-example',
  template: `<mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-typography</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Petrut</mat-panel-description>
    </mat-expansion-panel-header>
    <h1 [innerText]="'This is a heading <h1>'"></h1>
    <h2 [innerText]="'This is a heading <h2>'"></h2>
    <h3 [innerText]="'This is a heading <h3>'"></h3>
    <h4 [innerText]="'This is a heading <h4>'"></h4>
    <h5 [innerText]="'This is a heading <h5>'"></h5>
    <h6 [innerText]="'This is a heading <h6>'"></h6>
  </mat-expansion-panel>`
})
export class TypographyExample {}
