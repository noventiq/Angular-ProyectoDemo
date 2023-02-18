import { ProductCrudService } from './services/productCrudService';
import { Component } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss'],
})
export class ProductCrudComponent {
  formProduct = new FormGroup({
    brand: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    precios: new FormGroup({
      normal: new FormControl('', Validators.required),
      oferta: new FormControl('', Validators.required),
    }),
    images: new FormArray([
      new FormControl('', Validators.required),
      new FormControl('', Validators.required),
    ]),
    variedades: new FormArray([
      new FormGroup({
        id: new FormControl('', Validators.required),
        nombre: new FormControl('', Validators.required),
      }),
      new FormGroup({
        id: new FormControl('', Validators.required),
        nombre: new FormControl('', Validators.required),
      }),
    ]),
  });

  constructor(private _productService: ProductCrudService) {
    console.log('*01.constructor en productList.component');
  }

  onCrearProducto(): void {
    if(this.formProduct.invalid) {
      console.log(this.formProduct.value)
      return;
    }
    let instanceProduct = {
      brand: this.formProduct.value.brand,
      category: this.formProduct.value.category,
      description: this.formProduct.value.description,
      price: this.formProduct.value.price,
      rating: this.formProduct.value.rating,
      stock: this.formProduct.value.stock,
      title: this.formProduct.value.title,
      // images: this.formProduct.value.images
    };
    this._productService.crearProducto(instanceProduct).subscribe(
      (data: any) => {
        console.log(data);
        this.formProduct.reset();
      },
      (error) => {
        console.log(error);
        alert(error);
        // toastr.error('algo salio mal', 'BU');
      }
    );
  }
}
