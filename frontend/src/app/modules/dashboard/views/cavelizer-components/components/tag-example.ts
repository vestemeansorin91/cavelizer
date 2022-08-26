import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-example',
  template: ` <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-tag</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Mihai</mat-panel-description>
    </mat-expansion-panel-header>
    <div class="flex flex--wrap gap--16 mb--16">
      <cvz-tag class="narrow">Vegetables</cvz-tag>
      <cvz-tag class="narrow"
        >Vegetables
        <cvz-icon name="close" class="very-small color-primary align--center ml--6"></cvz-icon>
      </cvz-tag>
      <cvz-tag class="fat">Vegetables</cvz-tag>
      <cvz-tag class="fat extended"
        >Vegetables
        <cvz-icon name="close" class="very-small color-primary align--center ml--6"></cvz-icon>
      </cvz-tag>
    </div>
    <div class="flex flex--wrap gap--16 mb--16">
      <cvz-tag class="disabled narrow ">Vegetables</cvz-tag>
      <cvz-tag class="disabled narrow "
        >Vegetables
        <cvz-icon name="close" class="very-small color-grey align--center ml--6"></cvz-icon>
      </cvz-tag>
      <cvz-tag class="disabled fat">Vegetables</cvz-tag>
      <cvz-tag class="disabled fat"
        >Vegetables
        <cvz-icon name="close" class="very-small color-grey align--center ml--6"></cvz-icon>
      </cvz-tag>
    </div>
    <div class="flex flex--wrap gap--16 mb--16">
      <cvz-tag class="default narrow ">Vegetables</cvz-tag>
      <cvz-tag class="default narrow "
        >Vegetables
        <cvz-icon name="close" class="very-small color-grey align--center ml--6"></cvz-icon>
      </cvz-tag>
      <cvz-tag class="default fat">Vegetables</cvz-tag>
      <cvz-tag class="default fat "
        >Vegetables
        <cvz-icon name="close" class="very-small color-grey align--center ml--6"></cvz-icon>
      </cvz-tag>
    </div>
  </mat-expansion-panel>`
})
export class TagExample {}
