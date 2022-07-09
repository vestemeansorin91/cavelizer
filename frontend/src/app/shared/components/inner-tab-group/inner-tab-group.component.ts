import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InnerTabComponent } from './inner-tab/inner-tab.component';
import { TabGroupBase } from './tab-group.base';

@Component({
  selector: 'cavelizer-inner-tab-group',
  templateUrl: './inner-tab-group.component.html',
  providers: [{ provide: TabGroupBase, useExisting: InnerTabGroupComponent }],
  styleUrls: ['./inner-tab-group.component.scss']
})
export class InnerTabGroupComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(InnerTabComponent) public tabs: QueryList<InnerTabComponent>;
  @Output() public tabChange = new EventEmitter<number>();
  @Input() public defaultIndex = 0;
  public activeTab: InnerTabComponent | null = null;
  private subs: Subscription[] = [];

  constructor(private router: Router) {
    this.subs.push(this.router.events.subscribe(() => this.setActiveTab()));
  }

  public isActive(tab: InnerTabComponent) {
    return tab === this.activeTab;
  }

  public ngAfterContentInit() {
    setTimeout(() => {
      this.setActiveTab();
    });
  }

  public setActiveTab():void {
    if (this.tabs) {
      if (this.defaultIndex) {
        this.activeTab = this.tabs.toArray()[this.defaultIndex];
        return;
      }

      this.activeTab =
        this.tabs.find(
          t =>
            // eslint-disable-next-line eqeqeq
            this.router.url == this.router.createUrlTree(t.urlTree).toString()
        ) || this.tabs.first;
    }
  }

  public selectTab(tab: InnerTabComponent, index: number) {
    this.activeTab = tab;
    tab.onClick();
    this.tabChange.emit(index);
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}
