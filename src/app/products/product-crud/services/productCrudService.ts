import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductCrudService {
  productAddUrl: string = `${environment.API_URL}/products/add`;
  constructor(private http: HttpClient) {}

  crearProducto(data: any): Observable<any> {
    return this.http.post(this.productAddUrl, data);
  }
}
