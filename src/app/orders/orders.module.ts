import { SharedModule } from './../shared/shared.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [OrderListComponent],
  imports: [CommonModule, BrowserModule, SharedModule, NgbPaginationModule],
  exports: [OrderListComponent],
})
export class OrdersModule {}
