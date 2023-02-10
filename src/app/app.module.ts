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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
