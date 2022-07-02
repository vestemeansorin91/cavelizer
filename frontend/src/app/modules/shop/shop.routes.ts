import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    data: {
      breadcrumb: ''
    },
    children: [
      {
        path: '**',
        redirectTo: '',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutes {}
