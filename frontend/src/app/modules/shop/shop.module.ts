import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../../shared/components/button/button.module';
import { DropdownModule } from '../../shared/components/dropdown/dropdown.module';
import { IconModule } from '../../shared/components/icon/icon.module';
import { MiniBannerModule } from '../../shared/components/mini-banner/mini-banner.module';
import { QuoteModule } from '../../shared/components/quote/quote.module';
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
