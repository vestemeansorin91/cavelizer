import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminGuard} from "./shared/guards/admin.guard";
import {PageNotFoundComponent} from './shared/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule {
}
