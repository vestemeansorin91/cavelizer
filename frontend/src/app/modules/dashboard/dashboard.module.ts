import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AvatarModule, DefaultImagePipeModule, FormElementsModule, IconModule, TooltipModule } from '@cavelizer';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutesModule } from './dashboard.routes';
import { SidenavItemHasChildrenPipe } from './pipes/sidenav-item-has-children.pipe';
import { SidenavSubmenuHeightPipe } from './pipes/sidenav-submenu-height.pipe';
import { ArticlesComponent } from './views/articles/articles.component';
import { CommentsComponent } from './views/comments/comments.component';
import { DocumentationComponent } from './views/documentation/documentation.component';
import { PanelComponent } from './views/panel/panel.component';
import { PermissionDetailsComponent } from './views/permissions/components/permission-details/permission-details.component';
import { PermissionFormComponent } from './views/permissions/components/permission-form/permission-form.component';
import { PermissionListComponent } from './views/permissions/components/permission-list/permission-list.component';
import { ProductDetailsComponent } from './views/products/components/product-details/product-details.component';
import { ProductFormComponent } from './views/products/components/product-form/product-form.component';
import { ProductListComponent } from './views/products/components/product-list/product-list.component';
import { CategoryDetailsComponent } from './views/products/views/categories/components/category-details/category-details.component';
import { CategoryFormComponent } from './views/products/views/categories/components/category-form/category-form.component';
import { CategoryListComponent } from './views/products/views/categories/components/category-list/category-list.component';
import { TagsComponent } from './views/products/views/tags/tags.component';
import { RoleDetailsComponent } from './views/roles/components/role-details/role-details.component';
import { RoleFormComponent } from './views/roles/components/role-form/role-form.component';
import { RoleListComponent } from './views/roles/components/role-list/role-list.component';
import { UserDetailsComponent } from './views/users/components/user-details/user-details.component';
import { UserFormComponent } from './views/users/components/user-form/user-form.component';
import { UserListComponent } from './views/users/components/user-list/user-list.component';

const COMPONENTS = [
  DashboardComponent,
  SidenavComponent,
  TopbarComponent,

  /* TODO: Dashboard/Panel - Move to own module */
  PanelComponent,
  DocumentationComponent /* FIXME: Probably we will delete this in the future */,

  /* TODO: Shop - Move to own module */
  ProductDetailsComponent,
  ProductFormComponent,
  ProductListComponent,
  TagsComponent,
  CategoryDetailsComponent,
  CategoryFormComponent,
  CategoryListComponent,

  /* TODO: Blog - Move to own module */
  ArticlesComponent,
  CommentsComponent,

  /* TODO: Clients - Move to own module */
  UserDetailsComponent,
  UserFormComponent,
  UserListComponent,

  RoleDetailsComponent,
  RoleFormComponent,
  RoleListComponent,

  PermissionDetailsComponent,
  PermissionFormComponent,
  PermissionListComponent
];

const PIPES = [SidenavItemHasChildrenPipe, SidenavSubmenuHeightPipe];

const MODULES = [
  /* Angular Modules */
  CommonModule,
  DashboardRoutesModule,
  FormsModule,
  ReactiveFormsModule,

  /* Angular Material Modules */
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatMenuModule,
  OverlayModule,
  MatExpansionModule,

  /* Cavelizer Modules */
  AvatarModule,
  FormElementsModule,
  IconModule,
  TooltipModule,

  DefaultImagePipeModule
];

@NgModule({
  declarations: [COMPONENTS, PIPES],
  imports: [MODULES]
})
export class DashboardModule {}
