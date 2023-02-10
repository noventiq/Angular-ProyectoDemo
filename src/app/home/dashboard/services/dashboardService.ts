import { environment } from './../../../../environments/environment';
import { PaginationOrder } from './../models/paginationOrder';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PaginationProduct } from '../models/PaginationProduct';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  productListUrl: string = `${environment.API_URL}/products`;
  cartListUrl: string = `${environment.API_URL}/carts`;
  constructor(private http: HttpClient) {}

  getProductsList(): Observable<PaginationProduct> {
    return this.http
      .get(this.productListUrl)
      .pipe(map((response) => <PaginationProduct>response));
  }

  getCartList(): Observable<PaginationOrder> {
    return this.http
      .get(this.cartListUrl)
      .pipe(map((response) => <PaginationOrder>response));
  }
}
