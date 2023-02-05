import { Component, ViewEncapsulation } from '@angular/core';
// import { ProductListComponent } from './product-list/product-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'ProyectoDemo';
}
