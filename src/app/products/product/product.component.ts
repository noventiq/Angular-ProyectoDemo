import { Product } from '../../shared/models/product';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  products: Product[] = [];

  @Input() product?: Product;
  @Output() getProductEvent = new EventEmitter<Product>();

  constructor() {
    console.log('x01.constructor en product.component');
    this.products = [
      {
        id: 1,
        title: 'iPhone 9',
        description: 'An apple mobile which is nothing like apple',
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/1/1.jpg',
          'https://i.dummyjson.com/data/products/1/2.jpg',
          'https://i.dummyjson.com/data/products/1/3.jpg',
          'https://i.dummyjson.com/data/products/1/4.jpg',
          'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        ],
      },
      {
        id: 2,
        title: 'iPhone X',
        description:
          'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/2/1.jpg',
          'https://i.dummyjson.com/data/products/2/2.jpg',
          'https://i.dummyjson.com/data/products/2/3.jpg',
          'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
        ],
      },
      {
        id: 3,
        title: 'Samsung Universe 9',
        description:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: 'Samsung',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
        images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
      },
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      'x02.ngOnChanges, siempre y cuando tenga un @Input() en product.component',
      changes
    );
  }

  ngOnInit(): void {
    console.log('x03.ngOnInit en product.component');
  }

  ngDoCheck(): void {
    console.log('x04.ngDoCheck en product.component');
  }

  ngOnDestroy(): void {
    console.log('x05.ngOnDestroy en product.component');
  }

  onSelectProduct(item: Product) {
    const productSelected: Product | undefined = this.products.find(
      (x) => x.id == item.id
    );
    this.getProductEvent.emit(productSelected);
  }
}
