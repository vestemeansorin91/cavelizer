import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopComponent } from './shop.component';
import { ShopRoutes } from './shop.routes';

const COMPONENTS = [ShopComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, ShopRoutes, SharedModule]
})
export class ShopModule {}
