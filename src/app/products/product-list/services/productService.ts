import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PaginationProduct } from '../models/paginationProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productListUrl: string = `https://localhost:7078/api/v1/products`;
  constructor(private http: HttpClient) {}

  getProductsList(): Observable<PaginationProduct> {
    // let storageKeyIdToken = ''
    // const keys = Object.keys(localStorage)
    // for (let key of keys) {
    //     if(key.indexOf('-idtoken-') > -1) {
    //         storageKeyIdToken = key;
    //         // console.log(`${key}: ${localStorage.getItem(key)}`)
    //         break;
    //     }
    // }

    // const tokenKeys = JSON.parse(localStorage.getItem(storageKeyIdToken));

    return this.http
      .get(this.productListUrl
      //   , {
      //   headers: {
      //     "Authorization": `Bearer ${tokenKeys.secret}`
      //   }
      // }
      )
      .pipe(map((response) => <PaginationProduct>response));
  }
}
