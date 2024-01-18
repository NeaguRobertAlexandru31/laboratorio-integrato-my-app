import { Pipe, PipeTransform } from '@angular/core';
import All from '../_models/all.model';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: All[], searchText: string): All[] {
    if(!items) return [];
    if(!searchText) return items;
      searchText = searchText.toLowerCase();
      return items.filter( it => {
      return it.nameTeam.toLowerCase().includes(searchText) || it.codeTeam.toLowerCase().includes(searchText);
    });
   }
}