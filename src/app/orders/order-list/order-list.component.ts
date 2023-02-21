import { BehaviorSubject, Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { OrderService } from './orderService/orderService';
import { PaginationOrder } from './models/paginationOrder';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  getOrderSub: Subscription;
  ordenesPaginationInfo: PaginationOrder = {
    carts: [],
    total: 0,
    skip: 0,
    limit: 0,
  };

  page_size: number = 3;
  page_number: number = 1;

  ordenesPaginationInfoLimitSkip: PaginationOrder = {
    carts: [],
    total: 0,
    skip: 0,
    limit: 0,
  };

  pageSize: number = 5;
  private _pageNumber: number = 1;

  constructor(private _orderService: OrderService) {
    this.getOrderList();
    this.getOrderListLimitAndSkip();
  }

  getOrderList(): void {
    this.getOrderSub = this._orderService.getCartList().subscribe({
      next: (response: any) => {
        console.log(response);
        this.ordenesPaginationInfo = response;
        // this.paginationInfo = response.data;
      },
      error: (reason) => {
        // Message.mostrarErrorServidor(reason);
      },
      complete: () => {
        // Message.ocultarProcesando();
      },
    });
  }

  set pageNumber(value: number) {
    this._pageNumber = value;
    console.log('Change detected: ', this._pageNumber);
    this.getOrderListLimitAndSkip();
  }

  get pageNumber(): number {
    return this._pageNumber;
  }

  getOrderListLimitAndSkip(): void {
    const skip = (this._pageNumber - 1) * this.pageSize;
    this.getOrderSub = this._orderService
      .getCartListLimitAndSkip(this.pageSize, skip)
      .subscribe({
        next: (response: any) => {
          console.log(response);
          this.ordenesPaginationInfoLimitSkip = response;
          // this.paginationInfo = response.data;
        },
        error: (reason) => {
          // Message.mostrarErrorServidor(reason);
        },
        complete: () => {
          // Message.ocultarProcesando();
        },
      });
  }
}
