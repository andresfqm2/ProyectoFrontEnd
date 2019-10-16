import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterVehicles'
})
export class FilterVehiclesPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultVehicles = [];
    for(const vechicles of value){
      if(vechicles.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultVehicles.push(vechicles);
 
      };
 
    };
    return resultVehicles;
   }

}
