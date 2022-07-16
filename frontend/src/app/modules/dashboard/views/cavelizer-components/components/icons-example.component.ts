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
        <select [(ngModel)]="iconsSize" class="mb--32">
          <option value="small">Small (16x16px)</option>
          <option value="">Normal (24x24px)</option>
          <option value="big">Big (32x32px)</option>
          <option value="xl">XL (64x64px)</option>
          <option value="xxl">XXL (128x128px)</option>
        </select>

        <select [(ngModel)]="iconsColor" class="mb--32">
          <option value="">Default</option>
          <option value="color-primary">color-primary</option>
          <option value="color-warning">color-warning</option>
          <option value="color-error">color-error</option>
          <option value="color-info">color-info</option>
        </select>
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
