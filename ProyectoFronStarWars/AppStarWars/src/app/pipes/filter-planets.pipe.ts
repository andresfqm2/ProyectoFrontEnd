import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPlanets'
})
export class FilterPlanetsPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPlanets = [];
    for(const planets of value){
      if(planets.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPlanets.push(planets);
 
      };
 
    };
    return resultPlanets;
   }

}
