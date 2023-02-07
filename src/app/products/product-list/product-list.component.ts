import { Product } from './../product/models/product';
import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnChanges, DoCheck {
  products: Product[] = [];
  buscar: string = "";

  constructor() {
    console.log('*01.constructor en productList.component');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('*02.ngOnChanges, siempre y cuando tenga un @Input() en productList.component', changes);
  }

  ngOnInit() {
    console.log('*03.ngOnInit en productList.component');

    this.products = [
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
  }

  ngDoCheck(): void {
    console.log('x04.ngDoCheck en productList.component');
  }


  onFullDescriptionProduct(item: Product) {
    let indexProductSelected = this.products.findIndex((x) => x.id == item.id);
    this.products[indexProductSelected] = item;
  }
}
