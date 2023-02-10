import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [OrderListComponent],
  imports: [CommonModule, BrowserModule],
  exports: [OrderListComponent],
})
export class OrdersModule {}
