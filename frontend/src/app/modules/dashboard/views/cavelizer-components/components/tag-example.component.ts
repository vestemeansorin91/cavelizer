import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-example',
  template: `<mat-expansion-panel expanded="true">
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-tag</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Mihai</mat-panel-description>
    </mat-expansion-panel-header>
    <div class="flex flex--wrap gap--16 mb--16">
      <cavelizer-tag class="narrow">Tag</cavelizer-tag>
      <cavelizer-tag class="extended">Tag</cavelizer-tag>
      <cavelizer-tag class="fat">Tag</cavelizer-tag>
      <cavelizer-tag class="fat extended">Tag</cavelizer-tag>
    </div>
    <div class="flex flex--wrap gap--16 mb--16">
      <cavelizer-tag class="disabled narrow ">Tag</cavelizer-tag>
      <cavelizer-tag class="disabled extended ">Tag</cavelizer-tag>
      <cavelizer-tag class="disabled fat">Tag</cavelizer-tag>
      <cavelizer-tag class="disabled fat extended">Tag</cavelizer-tag>
    </div>
    <div class="flex flex--wrap gap--16 mb--16">
      <cavelizer-tag class="default narrow ">Tag</cavelizer-tag>
      <cavelizer-tag class="default extended ">Tag</cavelizer-tag>
      <cavelizer-tag class="default fat">Tag</cavelizer-tag>
      <cavelizer-tag class="default fat extended">Tag</cavelizer-tag>
    </div>
  </mat-expansion-panel>`
})
export class TagExampleComponent {}
