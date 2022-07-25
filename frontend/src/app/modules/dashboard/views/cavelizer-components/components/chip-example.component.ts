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
      <cavelizer-chip>48%</cavelizer-chip>
      <cavelizer-chip class="error">48%</cavelizer-chip>
      <cavelizer-chip class="info">48%</cavelizer-chip>
      <cavelizer-chip class="disabled">48%</cavelizer-chip>
    </div>
    <div class="flex flex--wrap gap--16 mb--16">
      <cavelizer-chip class="fill-lighter">48%</cavelizer-chip>
      <cavelizer-chip class="fill-lighter error">48%</cavelizer-chip>
      <cavelizer-chip class="fill-lighter info">48%</cavelizer-chip>
      <cavelizer-chip class="fill-lighter disabled">48%</cavelizer-chip>
    </div>
    <div class="flex flex--wrap gap--16 mb--16">
      <cavelizer-chip class="fill fill-lighter">48%</cavelizer-chip>
      <cavelizer-chip class="fill fill-lighter error">48%</cavelizer-chip>
      <cavelizer-chip class="fill fill-lighter info">48%</cavelizer-chip>
      <cavelizer-chip class="fill fill-lighter disabled">48%</cavelizer-chip>
    </div>
  </mat-expansion-panel>`
})
export class ChipExampleComponent {}
