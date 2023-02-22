import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';


@Injectable({
  providedIn: 'root',
})
export class UserItemService {
  userListUrl: string = `${environment.API_URL}/users`;
  constructor(private http: HttpClient) {}

  getUserById(id: string): Observable<User> {
    return this.http
      .get(`${this.userListUrl}/${id}`)
      .pipe(map((response) => <User>response));
  }
}
