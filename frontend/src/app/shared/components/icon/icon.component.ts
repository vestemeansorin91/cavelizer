import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

const ICONS_PATH = 'assets/icons/svg';
const ICON_TYPE = '.svg';

@Component({
  selector: 'cvz-icon',
  template: ``,
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public name = '';
  @HostBinding('innerHTML') public svg: any;
  private subscription = new Subscription();

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {}

  public ngOnInit(): void {
    this.subscription.add(
      this.http
        .get(`${ICONS_PATH}/${this.name}${ICON_TYPE}`, { responseType: 'text' })
        .subscribe(value => (this.svg = this.sanitizer.bypassSecurityTrustHtml(value)))
    );
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['name'] && !changes['name'].firstChange) {
      this.subscription.add(
        this.http
          .get(`${ICONS_PATH}/${this.name}${ICON_TYPE}`, { responseType: 'text' })
          .subscribe(value => (this.svg = this.sanitizer.bypassSecurityTrustHtml(value)))
      );
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
