import { PaginationOrder } from './models/paginationOrder';

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaginationProduct } from './models/PaginationProduct';
import { DashboardService } from './services/DashboardService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
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

  constructor(private _dashboarService: DashboardService) {
    this.getProductList();
    this.getOrderList();
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
}
