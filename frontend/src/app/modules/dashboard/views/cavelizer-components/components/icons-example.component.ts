import { Component } from '@angular/core';
import { projectIcons } from '../../../../../shared/components/icon/project-icons';

@Component({
  selector: 'app-icons-example',
  template: `<mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-icon</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Sorin </mat-panel-description>
    </mat-expansion-panel-header>

    <div class="flex gap--60 flex--wrap">
      <cavelizer-icon *ngFor="let icon of projectIcons" [name]="icon" class="size--24"></cavelizer-icon>
    </div>
  </mat-expansion-panel>`
})
export class IconsExampleComponent {
  public projectIcons = Object.keys(projectIcons);
}
