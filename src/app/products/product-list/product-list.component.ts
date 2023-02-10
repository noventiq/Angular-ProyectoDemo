import { Subscription } from 'rxjs';
import { Product } from '../../shared/models/product';
import {
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PaginationProduct } from './models/paginationProduct';
import { ProductService } from './services/productService';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy
{
  getProductSub: Subscription;

  buscar: string = "";
  productoPaginationInfo: PaginationProduct = {
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  };

  constructor(private _productService: ProductService) {
    console.log('*01.constructor en productList.component');
    this.getProductList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      '*02.ngOnChanges, siempre y cuando tenga un @Input() en productList.component',
      changes
    );
  }

  ngOnInit() {
    console.log('*03.ngOnInit en productList.component');
  }

  ngDoCheck(): void {
    console.log('*04.ngDoCheck en productList.component');
  }

  ngOnDestroy(): void {
    console.log('*05.ngOnDestroy en productList.component');
  }

  onFullDescriptionProduct(item: Product) {
    let indexProductSelected = this.productoPaginationInfo.products.findIndex((x) => x.id == item.id);
    this.productoPaginationInfo[indexProductSelected] = item;
  }

  getProductList(): void {
    this.getProductSub = this._productService.getProductsList().subscribe({
      next: (response: any) => {
        console.log(response);
        this.productoPaginationInfo = response;
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
