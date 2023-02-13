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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
