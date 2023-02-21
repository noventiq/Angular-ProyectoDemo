import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatePipe } from './pipes/paginate.pipe';
import { DatePeruPipe } from './pipes/date-peru.pipe';

@NgModule({
  declarations: [
    // PipesPipe,
    PaginatePipe,
    DatePeruPipe,
  ],
  imports: [CommonModule],
  exports: [PaginatePipe, DatePeruPipe],
})
export class SharedModule {
}
