import { ProductCrudComponent } from './../product-crud/product-crud.component';
import { Subscription } from 'rxjs';
import { Product } from '../../shared/models/product';
import {
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { PaginationProduct } from './models/paginationProduct';
import { ProductService } from './services/productService';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy, AfterViewInit
{
  claseDinamica = 'form-control';
  mostrarBotonEditar = true;
  name = 'this is from app compoenent';

  // @ViewChildren('childComponentTemplateVariable')
  // productComponents: QueryList<ProductCrudComponent>;
  @ViewChild('childComponentTemplateVariable', { static: true })
  productComponent: ProductCrudComponent;

  getProductSub: Subscription;

  buscar: string = '';
  closeResult: string = '';
  modoFormulario: number = 1;

  productoPaginationInfo: PaginationProduct = {
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  };

  constructor(
    private _productService: ProductService,
    private modalService: NgbModal
  ) {
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

  public ngAfterViewInit(): void {
    // this.productComponents.changes.subscribe(
    //   (comps: QueryList<ProductCrudComponent>) => {
    //     this.productComponent = comps.first;
    //   }
    // );
  }

  onFullDescriptionProduct(item: Product) {
    let indexProductSelected = this.productoPaginationInfo.products.findIndex(
      (x) => x.id == item.id
    );
    this.productoPaginationInfo[indexProductSelected] = item;
  }

  cambiarClase() {
    this.claseDinamica = "form-control-sm";
    this.mostrarBotonEditar = false;
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

  showModalCrear(content) {
    this.modoFormulario = 1;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  showModalEditar(content) {
    this.modoFormulario = 2;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title',          keyboard: false
       })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  crearProducto(event) {
    // console.log(event);
    const elementoHTML : HTMLButtonElement = event.target as HTMLButtonElement;
    console.log(elementoHTML.dataset);
    // this.productComponent.onCrearProducto();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
