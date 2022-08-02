import { Component } from '@angular/core';
import { BannerSetup } from '@cavelizer';

@Component({
  selector: 'app-mini-banner-example',
  template: `<mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        <strong>cavelizer-mini-banner</strong>
      </mat-panel-title>
      <mat-panel-description> Creat de Mihai</mat-panel-description>
    </mat-expansion-panel-header>

    <cvz-mini-banner>
      <ng-container subtitle>{{ banner.subtitle }}</ng-container>
      <ng-container title>{{ banner.title }}</ng-container>
      <ng-container action> {{ banner.button }} </ng-container>
    </cvz-mini-banner>

    <cvz-mini-banner>
      <ng-container subtitle>{{ banner2.subtitle }}</ng-container>
      <ng-container title>{{ banner2.title }}</ng-container>
      <ng-container action>{{ banner2.button }} </ng-container>
    </cvz-mini-banner>

    <cvz-mini-banner [banner]="banner"></cvz-mini-banner>
  </mat-expansion-panel>`
})
export class MiniBannerExample {
  public banner: BannerSetup = {
    subtitle: 'Banner subfocus',
    title: 'Space for heading',
    button: 'Read recepies'
  };

  public banner2: BannerSetup = {
    subtitle: 'Banner subfocus',
    title: 'Space for heading',
    button: 'Read recepies'
  };
}
