import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCharacter'
})
export class FilterCharacterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length <2 ) return value;
    const resultPeoples = [];
    for(const peoples of value){
      if(peoples.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPeoples.push(peoples);
 
      };
 
    };
    return resultPeoples;
   }

}
