import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(arrayx: any[], page_size: number | string, page_number: number): any[] {
    if(!arrayx.length) return []

    if(page_size === 'all') {
      return arrayx;
    }

    page_size = page_size || 5;
    page_number = page_number || 1;
    --page_number;

    return arrayx.slice(page_number * <number>page_size, (page_number + 1) * <number>page_size)
  }

}
