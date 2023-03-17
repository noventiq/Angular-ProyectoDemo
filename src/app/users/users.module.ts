import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './../shared/shared.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  declarations: [UserItemComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    SharedModule,
    NgbPaginationModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class UsersModule {}
