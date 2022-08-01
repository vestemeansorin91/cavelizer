import { Component } from '@angular/core';

@Component({
  selector: 'app-chip-example',
  template: `<mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-chip</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Mihai</mat-panel-description>
    </mat-expansion-panel-header>
    <div class="flex flex--wrap gap--16 mb--16">
      <cvz-chip>48%</cvz-chip>
      <cvz-chip class="error">48%</cvz-chip>
      <cvz-chip class="info">48%</cvz-chip>
      <cvz-chip class="disabled">48%</cvz-chip>
    </div>
    <div class="flex flex--wrap gap--16 mb--16">
      <cvz-chip class="fill-lighter">48%</cvz-chip>
      <cvz-chip class="fill-lighter error">48%</cvz-chip>
      <cvz-chip class="fill-lighter info">48%</cvz-chip>
      <cvz-chip class="fill-lighter disabled">48%</cvz-chip>
    </div>
    <div class="flex flex--wrap gap--16 mb--16">
      <cvz-chip class="fill fill-lighter">48%</cvz-chip>
      <cvz-chip class="fill fill-lighter error">48%</cvz-chip>
      <cvz-chip class="fill fill-lighter info">48%</cvz-chip>
      <cvz-chip class="fill fill-lighter disabled">48%</cvz-chip>
    </div>
  </mat-expansion-panel>`
})
export class ChipExample {}
