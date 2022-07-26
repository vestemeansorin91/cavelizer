import {CdkCopyToClipboard} from "@angular/cdk/clipboard";
import {Component} from '@angular/core';
import {NotificationsService} from "angular2-notifications";
import {projectIcons} from '../../../../../shared/components/icon/project-icons';

@Component({
  selector: 'app-icons-example',
  template: `
    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>
          <strong>cavelizer-icon</strong>
        </mat-panel-title>
        <mat-panel-description> Creat de Sorin/Petrut</mat-panel-description>
      </mat-expansion-panel-header>

      <div class="flex gap--30">
        <mat-form-field appearance="outline">
          <mat-label>Size</mat-label>

          <mat-select [(ngModel)]="iconsSize">
            <mat-option value="small">Small (16x16px)</mat-option>
            <mat-option value="">Normal (24x24px)</mat-option>
            <mat-option value="big">Big (32x32px)</mat-option>
            <mat-option value="xl">XL (64x64px)</mat-option>
            <mat-option value="xxl">XXL (128x128px)</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Color</mat-label>

          <mat-select [(ngModel)]="iconsColor">
            <mat-option value="">Default</mat-option>
            <mat-option value="color-primary">color-primary</mat-option>
            <mat-option value="color-warning">color-warning</mat-option>
            <mat-option value="color-error">color-error</mat-option>
            <mat-option value="color-info">color-info</mat-option>
          </mat-select>
        </mat-form-field>
      </div>

      <div class="flex flex--wrap justify--space-between gap--12">
        <div *ngFor="let icon of projectIcons"
             (click)="copiedToClipboard(icon)"
             [cdkCopyToClipboard]="copyToClipboard(icon)"
             class="flex--column justify--center align--center pointer width--140 b-radius--8 hovered p--8">
          <cavelizer-icon
            [name]="icon"
            [ngClass]="[iconsSize, iconsColor]"
          ></cavelizer-icon>
          <span class="fs--12 mt--4">{{ icon }}</span>
        </div>
      </div>
    </mat-expansion-panel>`,
})
export class IconsExampleComponent {
  public projectIcons = projectIcons;
  public iconsSize = '';
  public iconsColor = '';

  constructor(private notificationsService: NotificationsService) {
  }

  public copyToClipboard(icon: string) {
    let classes = '';

    if (this.iconsColor || this.iconsSize) {
      classes = ` class="${this.iconsSize} ${this.iconsColor}"`;
    }
    return `<cavelizer-icon name="${icon}"${classes}></cavelizer-icon>`;
  }

  public copiedToClipboard(icon: string) {
    this.notificationsService.success('Success', `Icon '${icon}' copied!`)
  }
}
