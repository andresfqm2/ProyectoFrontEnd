import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStartships'
})
export class FilterStartshipsPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultStartships = [];
    for(const startships of value){
      if(startships.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultStartships.push(startships);
 
      };
 
    };
    return resultStartships;
   }

}
