import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

const ICONS_PATH = 'assets/icons/svg';
const ICON_TYPE = '.svg';

@Component({
  selector: 'cavelizer-icon',
  template: ``,
  styles: [
    `
      :host {
        display: inline-block;
        cursor: pointer;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit, OnDestroy {
  @Input() public name = '';
  private subscription = new Subscription();

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {}

  @HostBinding('innerHTML') public svg: any;

  ngOnInit() {
    this.subscription.add(
      this.http.get(`${ICONS_PATH}/${this.name}${ICON_TYPE}`, { responseType: 'text' }).subscribe(value => (this.svg = this.sanitizer.bypassSecurityTrustHtml(value)))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
