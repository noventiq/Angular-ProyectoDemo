import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlackComponent } from './black/black.component';

@NgModule({
  declarations: [DefaultComponent, BlackComponent],
  imports: [
    CommonModule,
    RouterModule, //<- Importante
  ],
})
export class LayoutsModule {}
