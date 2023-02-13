import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [ProductListComponent, ProductComponent],
})
export class ProductsModule {}
