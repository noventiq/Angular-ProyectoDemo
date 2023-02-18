import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCrudComponent } from './product-crud/product-crud.component';

@NgModule({
  declarations: [ProductListComponent, ProductComponent, ProductCrudComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [ProductListComponent, ProductComponent],
})
export class ProductsModule {}
