import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersListadoComponent } from './users-listado/users-listado.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersLazyRoutingModule } from './users-lazy-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersListadoComponent],
  imports: [
    CommonModule,
    UsersLazyRoutingModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    SharedModule,
  ],
})
export class UsersLazyModule {}
