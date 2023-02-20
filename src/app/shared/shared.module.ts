import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatePipe } from './pipes/paginate.pipe';

@NgModule({
  declarations: [
    // PipesPipe,
    PaginatePipe,
  ],
  imports: [CommonModule],
  exports: [PaginatePipe],
})
export class SharedModule {
}
