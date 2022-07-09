import {Component} from '@angular/core';
import {projectIcons} from "../../../../../shared/components/icon/project-icons";

@Component({
  selector: 'app-icons-example',
  template: `<mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-icon</strong>
      </mat-panel-title>
      <mat-panel-description>
        Creat de Sorin
      </mat-panel-description>
    </mat-expansion-panel-header>


    <div class="flex gap--30">
      <cavelizer-icon *ngFor="let icon of projectIcons" [name]="icon" [matTooltip]="icon" [cdkCopyToClipboard]="copyToClipboard(icon)" class="width--24"></cavelizer-icon>
    </div>

  </mat-expansion-panel>`,
})
export class IconsExampleComponent{
  public projectIcons = Object.keys(projectIcons);

  public copyToClipboard(icon: string) {
    return `<cavelizer-icon [name]="${icon}" class="width--24"></cavelizer-icon>`
  }
}
