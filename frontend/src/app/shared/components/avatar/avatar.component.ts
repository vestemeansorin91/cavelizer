import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'cvz-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent implements DoCheck {
  @Input() public name = '';
  @Input() public avatar: string | undefined = undefined;
  @Input() public size = 60;
  @Input() public editable = false;
  @Output() avatarClicked = new EventEmitter();

  public avatarInitial = '';
  public avatarImg: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.setAvatar();
  }

  public ngDoCheck(): void {
    this.avatarInitial = '';
    this.avatarImg = '';
    this.setAvatar();
  }

  private setAvatar(): void {
    if (this.avatar) {
      this.avatarImg = this.sanitizer.bypassSecurityTrustResourceUrl(this.avatar);
    } else if (this.name) {
      this.avatarInitial = getInitialsFromName(this.name);
    }
  }

  @HostListener('click') edit() {
    if (this.editable) {
      this.avatarClicked.emit();
    }
  }
}

function getInitialsFromName(name: string): string {
  const atIndex = name.indexOf('@');
  name = name.substring(0, atIndex > 0 ? atIndex : undefined);
  const initials = (name.match(/\b\w/g) || []) as any;
  return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
}
