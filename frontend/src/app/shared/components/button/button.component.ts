import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { FocusableComponent } from '../../common/focusable-component';

@Component({
  selector: 'cvz-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  providers: [{ provide: FocusableComponent, useExisting: ButtonComponent }]
})
export class ButtonComponent {
  @Input() public icon: string | null = null;
  @Input() public cancelBubble: boolean = true;
  @Input() public target: string = '_self';
  @Input() public href: string | null = null;
  @Output() public click = new EventEmitter();
  @HostBinding('class.disabled') @Input() disabled: boolean = false;
  @ViewChild('btn', { static: false }) btn: ElementRef;

  public focus(): void {
    setTimeout(() => {
      if (this.btn) {
        this.btn.nativeElement.focus();
      }
    }, 50);
  }

  public setDisabled(disabled: boolean): void {
    this.disabled = disabled;
  }

  @HostListener('click', ['$event'])
  onClickEvent(e: MouseEvent): boolean | void {
    if (this.disabled) {
      e.stopPropagation();
      e.preventDefault();
      return false;
    }
  }

  onClick(e: Event): boolean | void {
    if (this.cancelBubble) {
      e.stopPropagation();
      e.preventDefault();
    }

    e.cancelBubble = this.cancelBubble;

    if (!this.disabled) {
      this.click.next(e);
    }

    return false;
  }
}
