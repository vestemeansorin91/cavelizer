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

    <div class="flex gap--30">
      <select [(ngModel)]="iconsSize" class="mb--32">
        <option value="small">Small (16x16px)</option>
        <option value="">Normal (24x24px)</option>
        <option value="big">Big (32x32px)</option>
        <option value="xl">XL (64x64px)</option>
        <option value="xxl">XXL (128x128px)</option>
      </select>

      <select [(ngModel)]="iconsColor" class="mb--32">
        <option value="">Default</option>
        <option value="primary-color">primary-color</option>
        <option value="warning-color">warning-color</option>
        <option value="error-color">error-color</option>
        <option value="info-color">info-color</option>
      </select>
    </div>

    <div class="flex flex--wrap justify--space-between gap--30">
      <cavelizer-icon *ngFor="let icon of projectIcons" [name]="icon" [matTooltip]="icon" [cdkCopyToClipboard]="copyToClipboard(icon)" [ngClass]="[iconsSize, iconsColor]"></cavelizer-icon>
    </div>
  </mat-expansion-panel>`
})
export class IconsExampleComponent {
  public projectIcons = projectIcons;
  public iconsSize = '';
  public iconsColor = '';

  public copyToClipboard(icon: string) {
    let classes = '';

    if(this.iconsColor || this.iconsSize) {
      classes = ` class="${this.iconsSize} ${this.iconsColor}"`;
    }

    return `<cavelizer-icon [name]="${icon}"${classes}></cavelizer-icon>`;
  }
}
