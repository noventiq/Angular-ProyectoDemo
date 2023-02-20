import { environment } from './../../../../environments/environment';
import { PaginationOrder } from './../models/paginationOrder';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class OrderService {
  cartListUrl: string = `${environment.API_URL}/carts`;
  constructor(private http: HttpClient) {}

  getCartList(): Observable<PaginationOrder> {
    return this.http
      .get(this.cartListUrl)
      .pipe(map((response) => <PaginationOrder>response));
  }

  getCartListLimitAndSkip(limit: number, skip: number): Observable<PaginationOrder> {
    return this.http
      .get(`${this.cartListUrl}?limit=${limit}&skip=${skip}`)
      .pipe(map((response) => <PaginationOrder>response));
  }
}
