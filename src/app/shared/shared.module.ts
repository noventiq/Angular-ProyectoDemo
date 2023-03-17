import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatePipe } from './pipes/paginate.pipe';
import { ArrayReversePipe } from './pipes/arrayReverse.pipe';

@NgModule({
  declarations: [
    ArrayReversePipe,
    PaginatePipe,
  ],
  imports: [CommonModule],
  exports: [PaginatePipe, ArrayReversePipe],
})
export class SharedModule {
}
