import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterVehicles'
})
export class FilterVehiclesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
