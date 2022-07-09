import {ChangeDetectionStrategy, Component, HostBinding, Input} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {projectIcons} from "./project-icons";

@Component({
  selector: 'cavelizer-icon',
  template: '',
  styles: [`:host {
    display: inline-block;
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input()
  public set name(value: string) {
    this.svg = this.domSanitizer.bypassSecurityTrustHtml(projectIcons[value]);
  }

  @HostBinding('innerHTML') public svg: any;

  constructor(private domSanitizer: DomSanitizer) {
  }
}
