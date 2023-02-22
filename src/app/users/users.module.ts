import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './../shared/shared.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  declarations: [UsersListComponent, UserItemComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    SharedModule,
    NgbPaginationModule,
    ReactiveFormsModule,
  ],
  exports: [UsersListComponent],
})
export class UsersModule {}
