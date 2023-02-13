import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DefaultComponent } from './default/default.component';
import { BlackComponent } from './black/black.component';
import { AuthComponent } from './auth/auth.component';
import { TopNavComponent } from './default/components/top-nav/top-nav.component';
import { TopNavUserComponent } from './default/components/top-nav-user/top-nav-user.component';

@NgModule({
  declarations: [
    DefaultComponent,
    BlackComponent,
    AuthComponent,
    TopNavComponent,
    TopNavUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule, //<- Importante
    NgbModule,
    FontAwesomeModule,
  ],
})
export class LayoutsModule {}
