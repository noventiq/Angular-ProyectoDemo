import { UserService } from './../../../../shared/services/userService';
import { Component } from '@angular/core';

@Component({
  selector: '[app-top-nav-user]',
  templateUrl: './top-nav-user.component.html',
  styleUrls: ['./top-nav-user.component.scss'],
})
export class TopNavUserComponent {
  constructor(public userService: UserService) {}
  ngOnInit() {}
}
