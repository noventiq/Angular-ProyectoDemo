import { AlertaGuard } from './guards/alerta.guard';
import { AlertaSinGuardarGuard } from './guards/alerta-sin-guardar.guard';
import { UserItemComponent } from './users/user-item/user-item.component';
import { PermisosGuard } from './guards/permisos.guard';
import { UsersListComponent } from './users/users-list/users-list.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { BlackComponent } from './layouts/black/black.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
    ],
  },
  {
    path: 'products',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      {
        path: ':id',
        component: ProductComponent,
        canActivate: [AlertaGuard],
      },
    ],
  },
  {
    path: 'orders',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: OrderListComponent,
      },
    ],
  },
  {
    path: 'users',
    component: DefaultComponent,
    canActivate: [PermisosGuard],
    children: [
      {
        path: '',
        component: UsersListComponent,
        canDeactivate: [AlertaSinGuardarGuard],
      },
      {
        path: ':id',
        component: UserItemComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
