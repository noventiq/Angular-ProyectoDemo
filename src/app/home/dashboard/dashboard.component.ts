import { PaginationOrder } from './models/paginationOrder';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaginationProduct } from './models/PaginationProduct';
import { DashboardService } from './services/DashboardService';
import { WebsocketService } from './services/websocketService';
import Chart from 'chart.js/auto';

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

  chartLineConfig: any = {
    type: 'line', //this denotes tha type of chart
    data: {
      // values on X-Axis
      labels: [
        '2022-05-10',
        '2022-05-11',
        '2022-05-12',
        '2022-05-13',
        '2022-05-14',
        '2022-05-15',
        '2022-05-16',
        '2022-05-17',
      ],
      datasets: [
        {
          label: 'Sales',
          data: ['467', '576', '572', '79', '92', '574', '573', '576'],
          backgroundColor: 'blue',
        },
        {
          label: 'Profit',
          data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
          backgroundColor: 'limegreen',
        },
      ],
    },
    options: {
      aspectRatio: 2.5,
    },
  };

  public chart: any;

  constructor(
    private _dashboarService: DashboardService,
    private WebsocketService: WebsocketService
  ) {
    this.getProductList();
    this.getOrderList();
    WebsocketService.messages.subscribe((msg) => {
      // this.received.shift();
      this.chartLineConfig.labels.shift();
      // this.
      console.log('Response from websocket: ' + msg);
    });
  }
  ngOnInit(): void {
    console.log('Method not implemented.');
    this.createChart();
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
      content: '',
    };
    message.source = 'localhost';
    message.content = this.content;

    this.sent.unshift(message);
    this.WebsocketService.messages.next(message);
  }

  closeWS() {
    this.WebsocketService.close();
  }

  createChart() {
    this.chart = new Chart('MyChart', this.chartLineConfig);
  }
}
