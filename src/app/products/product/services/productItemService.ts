import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class productItemService {
  productUrl: string = `${environment.API_URL}/products`;
  constructor(private http: HttpClient) {
  }

  getProductById(id:  number): Observable<Product> {
    return this.http
      .get(`${this.productUrl}/${id}`)
      .pipe(map((response) => <Product>response));
  }
}
