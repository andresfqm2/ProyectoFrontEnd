import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStartships'
})
export class FilterStartshipsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
