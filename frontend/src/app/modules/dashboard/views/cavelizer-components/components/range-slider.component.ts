import {Options} from "@angular-slider/ngx-slider";
import {Component} from '@angular/core';

@Component({
  selector: 'app-range-slider-example',
  template: `
    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>
          <strong>ngx-slider</strong>
        </mat-panel-title>
        <mat-panel-description> Creat de Sorin / ngx-slider</mat-panel-description>
      </mat-expansion-panel-header>

      <p>Min value: <input type="number" [(ngModel)]="minValue"></p>
      <p>Max value: <input type="number" [(ngModel)]="maxValue"></p>
      <ngx-slider [(value)]="minValue" [(highValue)]="maxValue" [options]="options"></ngx-slider>
    </mat-expansion-panel>
  `
})
export class RangeSliderComponent {
  minValue: number = 50;
  maxValue: number = 200;
  options: Options = {
    floor: 0,
    ceil: 250,
    showTicksValues: false,
  };
}
