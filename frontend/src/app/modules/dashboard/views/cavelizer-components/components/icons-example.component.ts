import { Component } from '@angular/core';
import { projectIcons } from '../../../../../shared/components/icon/project-icons';

@Component({
  selector: 'app-icons-example',
  template: `<mat-expansion-panel expanded="true">
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-icon</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Sorin </mat-panel-description>
    </mat-expansion-panel-header>

    <select [(ngModel)]="iconsSize" class="mb--32">
      <option value="small">Small</option>
      <option value="">Normal</option>
      <option value="big">Big</option>
      <option value="xl">XL</option>
      <option value="xxl">XXL</option>
    </select>

    <div class="flex gap--30">
      <cavelizer-icon *ngFor="let icon of projectIcons" [name]="icon" [matTooltip]="icon" [cdkCopyToClipboard]="copyToClipboard(icon)" [ngClass]="iconsSize"></cavelizer-icon>
    </div>
  </mat-expansion-panel>`
})
export class IconsExampleComponent {
  public projectIcons = projectIcons;
  public iconsSize = '';

  public copyToClipboard(icon: string) {
    return `<cavelizer-icon [name]="${icon}" class="big"></cavelizer-icon>`;
  }
}
