import { Subscription } from 'rxjs';
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

  constructor(private _orderService: OrderService) {
    this.getOrderList();
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
}
