import { PaginationOrder } from './models/paginationOrder';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaginationProduct } from './models/PaginationProduct';
import { DashboardService } from './services/DashboardService';
import { WebsocketService } from './services/websocketService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [WebsocketService],
})
export class DashboardComponent implements OnInit {
  getProductSub: Subscription;
  getOrderSub: Subscription;

  productoPaginationInfo: PaginationProduct = {
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  };

  ordenesPaginationInfo: PaginationOrder = {
    carts: [],
    total: 0,
    skip: 0,
    limit: 0,
  };

  title = 'socketrv';
  content = '';
  received = [];
  sent = [];

  constructor(
    private _dashboarService: DashboardService,
    private WebsocketService: WebsocketService
  ) {
    this.getProductList();
    this.getOrderList();
    WebsocketService.messages.subscribe((msg) => {
      this.received.unshift(msg);
      console.log('Response from websocket: ' + msg);
    });
  }
  ngOnInit(): void {
    console.log('Method not implemented.');
  }

  getProductList(): void {
    this.getProductSub = this._dashboarService.getProductsList().subscribe({
      next: (response: any) => {
        console.log(response);
        this.productoPaginationInfo = response;
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

  getOrderList(): void {
    this.getOrderSub = this._dashboarService.getCartList().subscribe({
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

  sendMsg() {
    let message = {
      source: '',
      content: ''
    };
    message.source = window.location.href;
    message.content = this.content;

    this.sent.unshift(message);
    this.WebsocketService.messages.next(message);
  }

  closeWS() {
    this.WebsocketService.close();
  }
}
