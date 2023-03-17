import { UserListService } from './services/userListService';
import { PaginationUser } from './models/paginationUser';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-listado',
  templateUrl: './users-listado.component.html',
  styleUrls: ['./users-listado.component.scss'],
})
export class UsersListadoComponent implements OnInit {
  getUserSub: Subscription;
  usersPaginationInfo: PaginationUser = {
    users: [],
    total: 0,
    skip: 0,
    limit: 0,
  };
  indice: number = 0;
  page_size: number = 10;
  page_number: number = 1;

  formSearch = new FormGroup({
    usuario: new FormControl(''),
  });

  constructor(private _userListService: UserListService) {}
  ngOnInit() {
    this.getUserList();
  }

  getUserList(): void {
    this.getUserSub = this._userListService.getUserList().subscribe({
      next: (response: any) => {
        console.log(response);
        this.usersPaginationInfo = response;
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
