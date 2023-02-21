import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePeru'
})
export class DatePeruPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    return `${value.getDay()}/${value.getMonth()}/${value.getFullYear()}`;
  }

}
