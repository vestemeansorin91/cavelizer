import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopHeadlineComponent } from './components/shop-headline/shop-headline.component';
import { ShopMenuComponent } from './components/shop-menu/shop-menu.component';
import { ShopComponent } from './shop.component';
import { ShopRoutes } from './shop.routes';
import { ShopHeaderComponent} from './components/shop-header/shop-header.component';

const COMPONENTS = [ShopComponent, ShopHeadlineComponent, ShopMenuComponent , ShopHeaderComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, ShopRoutes, SharedModule]
})
export class ShopModule {}
