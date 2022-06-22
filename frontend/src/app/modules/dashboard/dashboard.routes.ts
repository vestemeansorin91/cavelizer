import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CategoryListComponent } from './views/categories/components/category-list/category-list.component';
import { PanelComponent } from './views/panel/panel.component';
import { PermissionListComponent } from './views/permissions/components/permission-list/permission-list.component';
import { ProductListComponent } from './views/products/components/product-list/product-list.component';
import { RoleListComponent } from './views/roles/components/role-list/role-list.component';
import { UserListComponent } from './views/users/components/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'panel',
      },
      {
        path: 'panel',
        component: PanelComponent,
      },
      {
        path: 'users',
        component: UserListComponent,
      },
      {
        path: 'categories',
        component: CategoryListComponent,
      },
      {
        path: 'permissions',
        component: PermissionListComponent,
      },
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'roles',
        component: RoleListComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'panel',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutesModule {}
