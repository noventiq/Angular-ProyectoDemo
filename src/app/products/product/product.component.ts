import { productItemService } from './services/productItemService';
import { ActivatedRoute } from '@angular/router';
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
  productRemote: Product;
  productId: number;

  @Input() product?: Product;
  @Output() getProductEvent = new EventEmitter<Product>();

  constructor(private route: ActivatedRoute,
    private productItemService: productItemService
    ) {
    this.productId = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.productId);
    console.log('x01.constructor en product.component');
    this.getProductById();
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
    const productSelected: Product | undefined = item;
    this.getProductEvent.emit(productSelected);
  }

  getProductById() {
    this.productItemService.getProductById(this.productId)
    .subscribe({
      next: (response: any) => {
        console.log(response);
        this.productRemote = response;
        this.getProductEvent.emit(response);
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
