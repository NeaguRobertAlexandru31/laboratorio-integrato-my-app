import { Pipe, PipeTransform } from '@angular/core';
import AllTeams from '../_models/all.model';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: AllTeams[], searchText: string): AllTeams[] {
    if(!items) return [];
    if(!searchText) return items;
      searchText = searchText.toLowerCase();
      return items.filter( it => {
      return it.nameTeam.toLowerCase().includes(searchText) || it.codeTeam.toLowerCase().includes(searchText);
    });
   }
}