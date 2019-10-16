import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSpecies'
})
export class FilterSpeciesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
