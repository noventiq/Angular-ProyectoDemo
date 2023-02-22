import { environment } from './../../../../environments/environment';
import { PaginationUser } from './../models/paginationUser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UserListService {
  userListUrl: string = `${environment.API_URL}/users`;
  constructor(private http: HttpClient) {}

  getUserList(): Observable<PaginationUser> {
    return this.http
      .get(this.userListUrl)
      .pipe(map((response) => <PaginationUser>response));
  }

  getUserListLimitAndSkip(limit: number, skip: number): Observable<PaginationUser> {
    return this.http
      .get(`${this.userListUrl}?limit=${limit}&skip=${skip}`)
      .pipe(map((response) => <PaginationUser>response));
  }
}
