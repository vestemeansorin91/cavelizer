import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';
import { BreadCrumb } from './breadcrumb';

@Component({
  selector: 'cvz-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  public breadcrumbs: BreadCrumb[] = [];
  translations: any = {
    // '@@messages.breadcrumb.home': $localize`:@@messages.breadcrumb.home:Home`,
  };
  private subs: Subscription[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.breadcrumbs = this.buildBreadcrumb(this.route.root);
  }

  public buildBreadcrumb(route: ActivatedRoute, url = '', breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    const label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] : 'Acasa';
    const i18n =
      route.routeConfig && route.routeConfig.data ? route.routeConfig.data['i18n'] : '@@messages.breadcrumb.home';

    let path;
    if (route.routeConfig && route.routeConfig.data && route.routeConfig.data['breadcrumbPath']) {
      path = route.routeConfig.data['breadcrumbPath'];
    } else {
      path = route.routeConfig && route.routeConfig.path ? route.routeConfig.path : '';
    }

    const nextUrl = `${url}/${path}`;
    const breadcrumb: BreadCrumb = {
      label: this.tryTranslate(label, i18n),
      url: nextUrl,
      external: path === ''
    };

    const newBreadcrumbs = breadcrumbs;
    if (label) {
      newBreadcrumbs.push(breadcrumb);
      if (route.firstChild) {
        return this.buildBreadcrumb(route.firstChild, nextUrl, newBreadcrumbs);
      }
    }

    return _.uniqBy(newBreadcrumbs, 'label');
  }

  public goToHome(event: any) {
    event.preventDefault();
    window.location.assign('#/shop');
  }

  public tryTranslate(text: any, i18n: any) {
    if (i18n && this.translations.hasOwnProperty(i18n)) {
      return this.translations[i18n];
    } else {
      // i18n && console.warn(`translate: ${i18n} for: ${text}`);
      return text;
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
    this.breadcrumbs = [];
  }
}
