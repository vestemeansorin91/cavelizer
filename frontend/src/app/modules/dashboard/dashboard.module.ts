import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutesModule } from './dashboard.routes';
import { PanelComponent } from './views/panel/panel.component';

const COMPONENTS = [DashboardComponent, PanelComponent, SidenavComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, DashboardRoutesModule, SharedModule],
})
export class DashboardModule {}
