import { OrdersModule } from './orders/orders.module';
import { BlackComponent } from './layouts/black/black.component';
import { DefaultComponent } from './layouts/default/default.component';
import { FormsModule } from '@angular/forms';
import { ProductsModule } from './products/products.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module'; //*layouts.module.ts
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faSearch as fasSearch,
  faBars as fasBars,
  faUser as fasUser,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    // DefaultComponent,//#
    // BlackComponent,//#
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutsModule, //**layouts.module.ts
    ProductsModule,
    OrdersModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(fasSearch, fasSearch);
    library.addIcons(fasBars, fasBars);
    library.addIcons(fasUser, fasUser);
  }
}
