import { Product } from './../product/models/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      title: 'iPhone 9',
      price: 549,
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    },
    {
      id: 2,
      title: 'iPhone X',
      price: 899,
      thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    },
    {
      id: 3,
      title: 'Samsung Universe 9',
      price: 1249,
      rating: 4.09,
      thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
    },
  ];

  onFullDescriptionProduct(item: Product) {
    let indexProductSelected = this.products.findIndex( x => x.id == item.id);
    this.products[indexProductSelected] = item;
  }
}
