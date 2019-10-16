import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
   const resultFilms = [];
   for(const films of value){
     if(films.title.toLowerCase().indexOf(arg.toLowerCase()) > -1){
       resultFilms.push(films);

     };

   };
   return resultFilms;
  }

}
