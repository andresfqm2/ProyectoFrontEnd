import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPlanets'
})
export class FilterPlanetsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
