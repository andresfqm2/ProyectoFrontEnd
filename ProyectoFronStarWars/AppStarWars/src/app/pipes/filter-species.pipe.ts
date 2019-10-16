import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSpecies'
})
export class FilterSpeciesPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length <2 ) return value;
    const resultSpecies = [];
    for(const species of value){
      if(species.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultSpecies.push(species);
 
      };
 
    };
    return resultSpecies;
   }
}
