import { UsersModule } from './users/users.module';
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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { HomeModule } from './home/home.module';

import { MsalModule, MsalRedirectComponent, MsalGuard } from '@azure/msal-angular'; // MsalGuard added to imports
import { PublicClientApplication, InteractionType } from '@azure/msal-browser'; // InteractionType added to imports
import { HeadersInterceptor } from './shared/interceptors/headers.interceptor';


const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

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
    HomeModule,
    UsersModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    MsalModule.forRoot( new PublicClientApplication({
      auth: {
        clientId: '436e214d-a227-4f33-88eb-bb50722994ca', // Application (client) ID from the app registration
        authority: 'https://login.microsoftonline.com/1f3f9d61-e763-4e33-b8eb-e95c97f9f2ff', // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
        redirectUri: 'http://localhost:4200'// This is your redirect URI
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
      }
    }), {
      interactionType: InteractionType.Redirect, // MSAL Guard Configuration
      authRequest: {
        scopes: ['user.read']
      }
  }
  , null)
  ],
  providers: [
    MsalGuard, // MsalGuard added as provider here,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(fasSearch, fasSearch);
    library.addIcons(fasBars, fasBars);
    library.addIcons(fasUser, fasUser);
  }
}
