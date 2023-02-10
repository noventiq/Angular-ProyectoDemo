import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PaginationProduct } from '../models/paginationProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productListUrl: string = `${environment.API_URL}/products`;
  constructor(private http: HttpClient) {}

  getProductsList(): Observable<PaginationProduct> {
    return this.http
      .get(this.productListUrl)
      .pipe(map((response) => <PaginationProduct>response));
  }
}
