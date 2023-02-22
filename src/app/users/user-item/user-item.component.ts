import { User } from './../../shared/models/user';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserItemService } from './services/userItemService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  getUserSub: Subscription;
  idUser: string;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private _userItemService: UserItemService
  ) {
    this.idUser = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    this.getUserSub = this._userItemService.getUserById(this.idUser).subscribe({
      next: (response: any) => {
        console.log(response);
        this.user = response;
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
