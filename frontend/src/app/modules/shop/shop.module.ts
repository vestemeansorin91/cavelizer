import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule, DropdownModule, IconModule, MiniBannerModule, QuoteModule } from '@cavelizer';
import { ShopHeaderComponent } from './components/shop-header/shop-header.component';
import { ShopHeadlineComponent } from './components/shop-headline/shop-headline.component';
import { ShopMenuComponent } from './components/shop-menu/shop-menu.component';
import { ShopComponent } from './shop.component';
import { ShopRoutes } from './shop.routes';

const COMPONENTS = [ShopComponent, ShopHeadlineComponent, ShopMenuComponent, ShopHeaderComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    /* Angular Modules */
    CommonModule,
    ShopRoutes,

    /* Angular Material Modules */
    OverlayModule,

    /* Cavelizer Modules */
    ButtonModule,
    DropdownModule,
    IconModule,
    MiniBannerModule,
    QuoteModule
  ]
})
export class ShopModule {}
