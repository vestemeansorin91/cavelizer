import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { projectIcons } from 'src/app/shared/components/icon/project-icons';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html'
})
export class IconsComponent {
  public projectIcons = projectIcons;
  public iconsSize = '';
  public iconsColor = '';

  constructor(private notificationsService: NotificationsService) {}

  public copyToClipboard(icon: string) {
    let classes = '';

    if (this.iconsColor || this.iconsSize) {
      classes = ` class="${this.iconsSize} ${this.iconsColor}"`;
    }
    return `<cvz-icon name="${icon}"${classes}></cvz-icon>`;
  }

  public copiedToClipboard(icon: string) {
    this.notificationsService.success('Success', `Icon '${icon}' copied!`);
  }
}
