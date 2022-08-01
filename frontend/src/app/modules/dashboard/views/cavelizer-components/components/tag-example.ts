import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-example',
  template: `<mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-tag</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Mihai</mat-panel-description>
    </mat-expansion-panel-header>
    <div class="flex flex--wrap gap--16 mb--16">
      <cvz-tag class="narrow">Tag</cvz-tag>
      <cvz-tag class="extended">Tag</cvz-tag>
      <cvz-tag class="fat">Tag</cvz-tag>
      <cvz-tag class="fat extended">Tag</cvz-tag>
    </div>
    <div class="flex flex--wrap gap--16 mb--16">
      <cvz-tag class="disabled narrow ">Tag</cvz-tag>
      <cvz-tag class="disabled extended ">Tag</cvz-tag>
      <cvz-tag class="disabled fat">Tag</cvz-tag>
      <cvz-tag class="disabled fat extended">Tag</cvz-tag>
    </div>
    <div class="flex flex--wrap gap--16 mb--16">
      <cvz-tag class="default narrow ">Tag</cvz-tag>
      <cvz-tag class="default extended ">Tag</cvz-tag>
      <cvz-tag class="default fat">Tag</cvz-tag>
      <cvz-tag class="default fat extended">Tag</cvz-tag>
    </div>
  </mat-expansion-panel>`
})
export class TagExample {}
