import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutesModule } from './dashboard.routes';
import { CategoryDetailsComponent } from './views/categories/components/category-details/category-details.component';
import { CategoryFormComponent } from './views/categories/components/category-form/category-form.component';
import { CategoryListComponent } from './views/categories/components/category-list/category-list.component';
import { CavelizerComponentsComponent } from './views/cavelizer-components/components/cavelizer-components.component';
import { DocumentationComponent } from './views/documentation/documentation.component';
import { PanelComponent } from './views/panel/panel.component';
import { PermissionDetailsComponent } from './views/permissions/components/permission-details/permission-details.component';
import { PermissionFormComponent } from './views/permissions/components/permission-form/permission-form.component';
import { PermissionListComponent } from './views/permissions/components/permission-list/permission-list.component';
import { ProductDetailsComponent } from './views/products/components/product-details/product-details.component';
import { ProductFormComponent } from './views/products/components/product-form/product-form.component';
import { ProductListComponent } from './views/products/components/product-list/product-list.component';
import { RoleDetailsComponent } from './views/roles/components/role-details/role-details.component';
import { RoleFormComponent } from './views/roles/components/role-form/role-form.component';
import { RoleListComponent } from './views/roles/components/role-list/role-list.component';
import { UserDetailsComponent } from './views/users/components/user-details/user-details.component';
import { UserFormComponent } from './views/users/components/user-form/user-form.component';
import { UserListComponent } from './views/users/components/user-list/user-list.component';

const COMPONENTS = [
  DashboardComponent,
  SidenavComponent,

  CategoryDetailsComponent,
  CategoryFormComponent,
  CategoryListComponent,

  CavelizerComponentsComponent,

  DocumentationComponent,

  PanelComponent,

  PermissionDetailsComponent,
  PermissionFormComponent,
  PermissionListComponent,

  ProductDetailsComponent,
  ProductFormComponent,
  ProductListComponent,

  RoleDetailsComponent,
  RoleFormComponent,
  RoleListComponent,

  UserDetailsComponent,
  UserFormComponent,
  UserListComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, DashboardRoutesModule, SharedModule],
})
export class DashboardModule {}
